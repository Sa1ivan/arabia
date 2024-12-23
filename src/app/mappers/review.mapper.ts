import { IItemsReviewData } from "../models/items.model";

export function reviewMapper(item: string): IItemsReviewData[] {
    const reviewData: IItemsReviewData[] = [];
    const desc = item.slice(item.indexOf('"review":['), item.indexOf('AggregateRating')).split("{");
    const allAuthors: string[] = [];
    const allDate: string[] = [];
    const allRatings: string[] = [];
    const allDescriptions: string[] = [];

    desc.forEach((review, i) => {
        if(review.indexOf('"ratingValue') > 0) {
            allRatings.push(review.slice(review.indexOf('ue":"')+5, review.indexOf('ue":"')+6));
        }

        if(review.indexOf("name") > 0) {
            allAuthors.push(review.slice(review.indexOf('name":"')+7, review.indexOf('"},"datePublished"')));
            allDate.push(review.slice(review.indexOf('shed":"')+7, review.indexOf('","description')));
            allDescriptions.push(review.slice(review.indexOf('ion":"')+6, review.indexOf('","rev')));
        }
    });

    allAuthors.forEach((author, i) => {
        reviewData.push({
            name: author,
            date: allDate[i],
            description: allDescriptions[i],
            rating: allRatings[i]
        })
    });
    
    return reviewData;
}