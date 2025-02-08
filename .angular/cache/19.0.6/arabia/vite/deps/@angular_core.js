import {
  ALLOW_MULTIPLE_PLATFORMS,
  ANIMATION_MODULE_TYPE,
  APP_BOOTSTRAP_LISTENER,
  APP_ID,
  APP_INITIALIZER,
  AfterRenderManager,
  AfterRenderPhase,
  ApplicationInitStatus,
  ApplicationModule,
  ApplicationRef,
  Attribute,
  COMPILER_OPTIONS,
  CONTAINER_HEADER_OFFSET,
  CSP_NONCE,
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionScheduler,
  ChangeDetectionSchedulerImpl,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Compiler,
  CompilerFactory,
  Component,
  ComponentFactory,
  ComponentFactory$1,
  ComponentFactoryResolver$1,
  ComponentRef,
  ComponentRef$1,
  Console,
  ContentChild,
  ContentChildren,
  DEFAULT_CURRENCY_CODE,
  DEFAULT_LOCALE_ID,
  DEFER_BLOCK_CONFIG,
  DEFER_BLOCK_DEPENDENCY_INTERCEPTOR,
  DebugElement,
  DebugEventListener,
  DebugNode,
  DefaultIterableDiffer,
  DeferBlockBehavior,
  DeferBlockState,
  DestroyRef,
  Directive,
  ENABLE_ROOT_COMPONENT_BOOTSTRAP,
  ENVIRONMENT_INITIALIZER,
  EffectScheduler,
  ElementRef,
  EmbeddedViewRef,
  EnvironmentInjector,
  ErrorHandler,
  EventEmitter,
  FactoryTarget,
  HOST_TAG_NAME,
  Host,
  HostAttributeToken,
  HostBinding,
  HostListener,
  IMAGE_CONFIG,
  IMAGE_CONFIG_DEFAULTS,
  INJECTOR$1,
  INJECTOR_SCOPE,
  INTERNAL_APPLICATION_ERROR_HANDLER,
  IS_HYDRATION_DOM_REUSE_ENABLED,
  IS_INCREMENTAL_HYDRATION_ENABLED,
  Inject,
  InjectFlags,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  JSACTION_EVENT_CONTRACT,
  KeyValueDiffers,
  LContext,
  LOCALE_ID,
  LifecycleHooksFeature,
  LocaleDataIndex,
  MicrotaskEffectScheduler,
  MissingTranslationStrategy,
  ModuleWithComponentFactories,
  NG_COMP_DEF,
  NG_DIR_DEF,
  NG_ELEMENT_ID,
  NG_INJ_DEF,
  NG_MOD_DEF,
  NG_PIPE_DEF,
  NG_PROV_DEF,
  NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR,
  NO_CHANGE,
  NO_ERRORS_SCHEMA,
  NgModule,
  NgModuleFactory,
  NgModuleFactory$1,
  NgModuleRef,
  NgModuleRef$1,
  NgProbeToken,
  NgZone,
  NoopNgZone,
  Optional,
  Output,
  OutputEmitterRef,
  PACKAGE_ROOT_URL,
  PERFORMANCE_MARK_PREFIX,
  PLATFORM_ID,
  PLATFORM_INITIALIZER,
  PROVIDED_NG_ZONE,
  PendingTasks,
  PendingTasksInternal,
  Pipe,
  PlatformRef,
  Query,
  QueryList,
  REQUEST,
  REQUEST_CONTEXT,
  RESPONSE_INIT,
  ReflectionCapabilities,
  Renderer2,
  RendererFactory2,
  RendererStyleFlags2,
  ResourceStatus,
  RuntimeError,
  SIGNAL,
  SSR_CONTENT_INTEGRITY_MARKER,
  Sanitizer,
  SecurityContext,
  Self,
  SimpleChange,
  SkipSelf,
  TESTABILITY,
  TESTABILITY_GETTER,
  TRANSLATIONS,
  TRANSLATIONS_FORMAT,
  TemplateRef,
  Testability,
  TestabilityRegistry,
  TracingAction,
  TracingService,
  TransferState,
  Type,
  USE_RUNTIME_DEPS_TRACKER_FOR_JIT,
  VERSION,
  Version,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation,
  ViewRef,
  ViewRef$1,
  XSS_SECURITY_URL,
  ZONELESS_ENABLED,
  _global,
  _sanitizeHtml,
  _sanitizeUrl,
  afterNextRender,
  afterRender,
  afterRenderEffect,
  allowSanitizationBypassAndThrow,
  annotateForHydration,
  asNativeElements,
  assertInInjectionContext,
  assertNotInReactiveContext,
  assertPlatform,
  booleanAttribute,
  bypassSanitizationTrustHtml,
  bypassSanitizationTrustResourceUrl,
  bypassSanitizationTrustScript,
  bypassSanitizationTrustStyle,
  bypassSanitizationTrustUrl,
  clearResolutionOfComponentResourcesQueue,
  compileComponent,
  compileDirective,
  compileNgModule,
  compileNgModuleDefs,
  compileNgModuleFactory,
  compilePipe,
  computed,
  contentChild,
  contentChildren,
  convertToBitFlags,
  createComponent,
  createEnvironmentInjector,
  createInjector,
  createNgModule,
  createNgModuleRef,
  createPlatform,
  createPlatformFactory,
  defaultIterableDiffers,
  defaultKeyValueDiffers,
  defineInjectable,
  depsTracker,
  destroyPlatform,
  detectChangesInViewIfRequired,
  devModeEqual,
  disableProfiling,
  effect,
  enableProdMode,
  enableProfiling,
  findLocaleData,
  flushModuleScopingQueueAsMuchAsPossible,
  formatRuntimeError,
  forwardRef,
  generateStandaloneInDeclarationsError,
  getAsyncClassMetadataFn,
  getClosestComponentName,
  getDebugNode,
  getDeferBlocks,
  getDirectives,
  getHostElement,
  getInjectableDef,
  getLContext,
  getLocaleCurrencyCode,
  getLocalePluralCase,
  getModuleFactory,
  getNgModuleById,
  getOutputDestroyRef,
  getPlatform,
  getSanitizationBypassType,
  importProvidersFrom,
  inject,
  injectChangeDetectorRef,
  input,
  internalCreateApplication,
  internalProvideZoneChangeDetection,
  isBoundToModule,
  isComponentDefPendingResolution,
  isDevMode,
  isEnvironmentProviders,
  isInjectable,
  isNgModule,
  isPromise,
  isSignal,
  isStandalone,
  isSubscribable,
  linkedSignal,
  makeEnvironmentProviders,
  makeStateKey,
  mergeApplicationConfig,
  microtaskEffect,
  model,
  noSideEffects,
  numberAttribute,
  output,
  patchComponentDefWithScope,
  performanceMarkFeature,
  platformCore,
  provideAppInitializer,
  provideEnvironmentInitializer,
  provideExperimentalCheckNoChangesForDebug,
  provideExperimentalZonelessChangeDetection,
  providePlatformInitializer,
  provideZoneChangeDetection,
  publishExternalGlobalUtil,
  readHydrationInfo,
  reflectComponentType,
  registerLocaleData,
  registerNgModuleType,
  renderDeferBlockState,
  resetCompiledComponents,
  resetJitOptions,
  resolveComponentResources,
  resolveForwardRef,
  resource,
  restoreComponentResolutionQueue,
  runInInjectionContext,
  setAllowDuplicateNgModuleIdsForTest,
  setAlternateWeakRefImpl,
  setClassMetadata,
  setClassMetadataAsync,
  setCurrentInjector,
  setDocument,
  setInjectorProfilerContext,
  setLocaleId,
  setTestabilityGetter,
  signal,
  startMeasuring,
  stopMeasuring,
  store,
  stringify,
  transitiveScopesFor,
  triggerResourceLoading,
  truncateMiddle,
  unregisterAllLocaleData,
  untracked,
  unwrapSafeValue,
  viewChild,
  viewChildren,
  withDomHydration,
  withEventReplay,
  withI18nSupport,
  withIncrementalHydration,
  ɵINPUT_SIGNAL_BRAND_WRITE_TYPE,
  ɵgetUnknownElementStrictMode,
  ɵgetUnknownPropertyStrictMode,
  ɵsetClassDebugInfo,
  ɵsetUnknownElementStrictMode,
  ɵsetUnknownPropertyStrictMode,
  ɵunwrapWritableSignal,
  ɵɵCopyDefinitionFeature,
  ɵɵExternalStylesFeature,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵattributeInterpolate1,
  ɵɵattributeInterpolate2,
  ɵɵattributeInterpolate3,
  ɵɵattributeInterpolate4,
  ɵɵattributeInterpolate5,
  ɵɵattributeInterpolate6,
  ɵɵattributeInterpolate7,
  ɵɵattributeInterpolate8,
  ɵɵattributeInterpolateV,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassMapInterpolate2,
  ɵɵclassMapInterpolate3,
  ɵɵclassMapInterpolate4,
  ɵɵclassMapInterpolate5,
  ɵɵclassMapInterpolate6,
  ɵɵclassMapInterpolate7,
  ɵɵclassMapInterpolate8,
  ɵɵclassMapInterpolateV,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵcontentQuerySignal,
  ɵɵdeclareLet,
  ɵɵdefer,
  ɵɵdeferEnableTimerScheduling,
  ɵɵdeferHydrateNever,
  ɵɵdeferHydrateOnHover,
  ɵɵdeferHydrateOnIdle,
  ɵɵdeferHydrateOnImmediate,
  ɵɵdeferHydrateOnInteraction,
  ɵɵdeferHydrateOnTimer,
  ɵɵdeferHydrateOnViewport,
  ɵɵdeferHydrateWhen,
  ɵɵdeferOnHover,
  ɵɵdeferOnIdle,
  ɵɵdeferOnImmediate,
  ɵɵdeferOnInteraction,
  ɵɵdeferOnTimer,
  ɵɵdeferOnViewport,
  ɵɵdeferPrefetchOnHover,
  ɵɵdeferPrefetchOnIdle,
  ɵɵdeferPrefetchOnImmediate,
  ɵɵdeferPrefetchOnInteraction,
  ɵɵdeferPrefetchOnTimer,
  ɵɵdeferPrefetchOnViewport,
  ɵɵdeferPrefetchWhen,
  ɵɵdeferWhen,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵdisableBindings,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵenableBindings,
  ɵɵgetComponentDepsFactory,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵi18n,
  ɵɵi18nApply,
  ɵɵi18nAttributes,
  ɵɵi18nEnd,
  ɵɵi18nExp,
  ɵɵi18nPostprocess,
  ɵɵi18nStart,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵinvalidFactory,
  ɵɵinvalidFactoryDep,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceMathML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareClassMetadataAsync,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule,
  ɵɵngDeclarePipe,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵpipeBind4,
  ɵɵpipeBindV,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpropertyInterpolate2,
  ɵɵpropertyInterpolate3,
  ɵɵpropertyInterpolate4,
  ɵɵpropertyInterpolate5,
  ɵɵpropertyInterpolate6,
  ɵɵpropertyInterpolate7,
  ɵɵpropertyInterpolate8,
  ɵɵpropertyInterpolateV,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵpureFunction6,
  ɵɵpureFunction7,
  ɵɵpureFunction8,
  ɵɵpureFunctionV,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵreplaceMetadata,
  ɵɵresetView,
  ɵɵresolveBody,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeScript,
  ɵɵsanitizeStyle,
  ɵɵsanitizeUrl,
  ɵɵsanitizeUrlOrResourceUrl,
  ɵɵsetComponentScope,
  ɵɵsetNgModuleScope,
  ɵɵstoreLet,
  ɵɵstyleMap,
  ɵɵstyleMapInterpolate1,
  ɵɵstyleMapInterpolate2,
  ɵɵstyleMapInterpolate3,
  ɵɵstyleMapInterpolate4,
  ɵɵstyleMapInterpolate5,
  ɵɵstyleMapInterpolate6,
  ɵɵstyleMapInterpolate7,
  ɵɵstyleMapInterpolate8,
  ɵɵstyleMapInterpolateV,
  ɵɵstyleProp,
  ɵɵstylePropInterpolate1,
  ɵɵstylePropInterpolate2,
  ɵɵstylePropInterpolate3,
  ɵɵstylePropInterpolate4,
  ɵɵstylePropInterpolate5,
  ɵɵstylePropInterpolate6,
  ɵɵstylePropInterpolate7,
  ɵɵstylePropInterpolate8,
  ɵɵstylePropInterpolateV,
  ɵɵsyntheticHostListener,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4,
  ɵɵtextInterpolate5,
  ɵɵtextInterpolate6,
  ɵɵtextInterpolate7,
  ɵɵtextInterpolate8,
  ɵɵtextInterpolateV,
  ɵɵtrustConstantHtml,
  ɵɵtrustConstantResourceUrl,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵvalidateIframeAttribute,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-HPGD2JTR.js";
import "./chunk-LZZO2QZE.js";
export {
  ANIMATION_MODULE_TYPE,
  APP_BOOTSTRAP_LISTENER,
  APP_ID,
  APP_INITIALIZER,
  AfterRenderPhase,
  ApplicationInitStatus,
  ApplicationModule,
  ApplicationRef,
  Attribute,
  COMPILER_OPTIONS,
  CSP_NONCE,
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Compiler,
  CompilerFactory,
  Component,
  ComponentFactory$1 as ComponentFactory,
  ComponentFactoryResolver$1 as ComponentFactoryResolver,
  ComponentRef$1 as ComponentRef,
  ContentChild,
  ContentChildren,
  DEFAULT_CURRENCY_CODE,
  DebugElement,
  DebugEventListener,
  DebugNode,
  DefaultIterableDiffer,
  DestroyRef,
  Directive,
  ENVIRONMENT_INITIALIZER,
  ElementRef,
  EmbeddedViewRef,
  EnvironmentInjector,
  ErrorHandler,
  EventEmitter,
  HOST_TAG_NAME,
  Host,
  HostAttributeToken,
  HostBinding,
  HostListener,
  INJECTOR$1 as INJECTOR,
  Inject,
  InjectFlags,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  KeyValueDiffers,
  LOCALE_ID,
  MissingTranslationStrategy,
  ModuleWithComponentFactories,
  NO_ERRORS_SCHEMA,
  NgModule,
  NgModuleFactory$1 as NgModuleFactory,
  NgModuleRef$1 as NgModuleRef,
  NgProbeToken,
  NgZone,
  Optional,
  Output,
  OutputEmitterRef,
  PACKAGE_ROOT_URL,
  PLATFORM_ID,
  PLATFORM_INITIALIZER,
  PendingTasks,
  Pipe,
  PlatformRef,
  Query,
  QueryList,
  REQUEST,
  REQUEST_CONTEXT,
  RESPONSE_INIT,
  Renderer2,
  RendererFactory2,
  RendererStyleFlags2,
  ResourceStatus,
  Sanitizer,
  SecurityContext,
  Self,
  SimpleChange,
  SkipSelf,
  TRANSLATIONS,
  TRANSLATIONS_FORMAT,
  TemplateRef,
  Testability,
  TestabilityRegistry,
  TransferState,
  Type,
  VERSION,
  Version,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation,
  ViewRef,
  afterNextRender,
  afterRender,
  afterRenderEffect,
  asNativeElements,
  assertInInjectionContext,
  assertNotInReactiveContext,
  assertPlatform,
  booleanAttribute,
  computed,
  contentChild,
  contentChildren,
  createComponent,
  createEnvironmentInjector,
  createNgModule,
  createNgModuleRef,
  createPlatform,
  createPlatformFactory,
  defineInjectable,
  destroyPlatform,
  effect,
  enableProdMode,
  forwardRef,
  getDebugNode,
  getModuleFactory,
  getNgModuleById,
  getPlatform,
  importProvidersFrom,
  inject,
  input,
  isDevMode,
  isSignal,
  isStandalone,
  linkedSignal,
  makeEnvironmentProviders,
  makeStateKey,
  mergeApplicationConfig,
  model,
  numberAttribute,
  output,
  platformCore,
  provideAppInitializer,
  provideEnvironmentInitializer,
  provideExperimentalCheckNoChangesForDebug,
  provideExperimentalZonelessChangeDetection,
  providePlatformInitializer,
  provideZoneChangeDetection,
  reflectComponentType,
  resolveForwardRef,
  resource,
  runInInjectionContext,
  setTestabilityGetter,
  signal,
  untracked,
  viewChild,
  viewChildren,
  ALLOW_MULTIPLE_PLATFORMS as ɵALLOW_MULTIPLE_PLATFORMS,
  AfterRenderManager as ɵAfterRenderManager,
  CONTAINER_HEADER_OFFSET as ɵCONTAINER_HEADER_OFFSET,
  ChangeDetectionScheduler as ɵChangeDetectionScheduler,
  ChangeDetectionSchedulerImpl as ɵChangeDetectionSchedulerImpl,
  ComponentFactory$1 as ɵComponentFactory,
  Console as ɵConsole,
  DEFAULT_LOCALE_ID as ɵDEFAULT_LOCALE_ID,
  DEFER_BLOCK_CONFIG as ɵDEFER_BLOCK_CONFIG,
  DEFER_BLOCK_DEPENDENCY_INTERCEPTOR as ɵDEFER_BLOCK_DEPENDENCY_INTERCEPTOR,
  DeferBlockBehavior as ɵDeferBlockBehavior,
  DeferBlockState as ɵDeferBlockState,
  ENABLE_ROOT_COMPONENT_BOOTSTRAP as ɵENABLE_ROOT_COMPONENT_BOOTSTRAP,
  EffectScheduler as ɵEffectScheduler,
  IMAGE_CONFIG as ɵIMAGE_CONFIG,
  IMAGE_CONFIG_DEFAULTS as ɵIMAGE_CONFIG_DEFAULTS,
  INJECTOR_SCOPE as ɵINJECTOR_SCOPE,
  ɵINPUT_SIGNAL_BRAND_WRITE_TYPE,
  INTERNAL_APPLICATION_ERROR_HANDLER as ɵINTERNAL_APPLICATION_ERROR_HANDLER,
  IS_HYDRATION_DOM_REUSE_ENABLED as ɵIS_HYDRATION_DOM_REUSE_ENABLED,
  IS_INCREMENTAL_HYDRATION_ENABLED as ɵIS_INCREMENTAL_HYDRATION_ENABLED,
  JSACTION_EVENT_CONTRACT as ɵJSACTION_EVENT_CONTRACT,
  LContext as ɵLContext,
  LifecycleHooksFeature as ɵLifecycleHooksFeature,
  LocaleDataIndex as ɵLocaleDataIndex,
  MicrotaskEffectScheduler as ɵMicrotaskEffectScheduler,
  NG_COMP_DEF as ɵNG_COMP_DEF,
  NG_DIR_DEF as ɵNG_DIR_DEF,
  NG_ELEMENT_ID as ɵNG_ELEMENT_ID,
  NG_INJ_DEF as ɵNG_INJ_DEF,
  NG_MOD_DEF as ɵNG_MOD_DEF,
  NG_PIPE_DEF as ɵNG_PIPE_DEF,
  NG_PROV_DEF as ɵNG_PROV_DEF,
  NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR as ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR,
  NO_CHANGE as ɵNO_CHANGE,
  NgModuleFactory as ɵNgModuleFactory,
  NoopNgZone as ɵNoopNgZone,
  PERFORMANCE_MARK_PREFIX as ɵPERFORMANCE_MARK_PREFIX,
  PROVIDED_NG_ZONE as ɵPROVIDED_NG_ZONE,
  PendingTasksInternal as ɵPendingTasksInternal,
  ReflectionCapabilities as ɵReflectionCapabilities,
  ComponentFactory as ɵRender3ComponentFactory,
  ComponentRef as ɵRender3ComponentRef,
  NgModuleRef as ɵRender3NgModuleRef,
  RuntimeError as ɵRuntimeError,
  SIGNAL as ɵSIGNAL,
  SSR_CONTENT_INTEGRITY_MARKER as ɵSSR_CONTENT_INTEGRITY_MARKER,
  TESTABILITY as ɵTESTABILITY,
  TESTABILITY_GETTER as ɵTESTABILITY_GETTER,
  TracingAction as ɵTracingAction,
  TracingService as ɵTracingService,
  USE_RUNTIME_DEPS_TRACKER_FOR_JIT as ɵUSE_RUNTIME_DEPS_TRACKER_FOR_JIT,
  ViewRef$1 as ɵViewRef,
  XSS_SECURITY_URL as ɵXSS_SECURITY_URL,
  ZONELESS_ENABLED as ɵZONELESS_ENABLED,
  _sanitizeHtml as ɵ_sanitizeHtml,
  _sanitizeUrl as ɵ_sanitizeUrl,
  allowSanitizationBypassAndThrow as ɵallowSanitizationBypassAndThrow,
  annotateForHydration as ɵannotateForHydration,
  bypassSanitizationTrustHtml as ɵbypassSanitizationTrustHtml,
  bypassSanitizationTrustResourceUrl as ɵbypassSanitizationTrustResourceUrl,
  bypassSanitizationTrustScript as ɵbypassSanitizationTrustScript,
  bypassSanitizationTrustStyle as ɵbypassSanitizationTrustStyle,
  bypassSanitizationTrustUrl as ɵbypassSanitizationTrustUrl,
  clearResolutionOfComponentResourcesQueue as ɵclearResolutionOfComponentResourcesQueue,
  compileComponent as ɵcompileComponent,
  compileDirective as ɵcompileDirective,
  compileNgModule as ɵcompileNgModule,
  compileNgModuleDefs as ɵcompileNgModuleDefs,
  compileNgModuleFactory as ɵcompileNgModuleFactory,
  compilePipe as ɵcompilePipe,
  convertToBitFlags as ɵconvertToBitFlags,
  createInjector as ɵcreateInjector,
  defaultIterableDiffers as ɵdefaultIterableDiffers,
  defaultKeyValueDiffers as ɵdefaultKeyValueDiffers,
  depsTracker as ɵdepsTracker,
  detectChangesInViewIfRequired as ɵdetectChangesInViewIfRequired,
  devModeEqual as ɵdevModeEqual,
  disableProfiling as ɵdisableProfiling,
  enableProfiling as ɵenableProfiling,
  findLocaleData as ɵfindLocaleData,
  flushModuleScopingQueueAsMuchAsPossible as ɵflushModuleScopingQueueAsMuchAsPossible,
  formatRuntimeError as ɵformatRuntimeError,
  generateStandaloneInDeclarationsError as ɵgenerateStandaloneInDeclarationsError,
  getAsyncClassMetadataFn as ɵgetAsyncClassMetadataFn,
  getClosestComponentName as ɵgetClosestComponentName,
  getDebugNode as ɵgetDebugNode,
  getDeferBlocks as ɵgetDeferBlocks,
  getDirectives as ɵgetDirectives,
  getHostElement as ɵgetHostElement,
  getInjectableDef as ɵgetInjectableDef,
  getLContext as ɵgetLContext,
  getLocaleCurrencyCode as ɵgetLocaleCurrencyCode,
  getLocalePluralCase as ɵgetLocalePluralCase,
  getOutputDestroyRef as ɵgetOutputDestroyRef,
  getSanitizationBypassType as ɵgetSanitizationBypassType,
  ɵgetUnknownElementStrictMode,
  ɵgetUnknownPropertyStrictMode,
  _global as ɵglobal,
  injectChangeDetectorRef as ɵinjectChangeDetectorRef,
  internalCreateApplication as ɵinternalCreateApplication,
  internalProvideZoneChangeDetection as ɵinternalProvideZoneChangeDetection,
  isBoundToModule as ɵisBoundToModule,
  isComponentDefPendingResolution as ɵisComponentDefPendingResolution,
  isEnvironmentProviders as ɵisEnvironmentProviders,
  isInjectable as ɵisInjectable,
  isNgModule as ɵisNgModule,
  isPromise as ɵisPromise,
  isSubscribable as ɵisSubscribable,
  microtaskEffect as ɵmicrotaskEffect,
  noSideEffects as ɵnoSideEffects,
  patchComponentDefWithScope as ɵpatchComponentDefWithScope,
  performanceMarkFeature as ɵperformanceMarkFeature,
  publishExternalGlobalUtil as ɵpublishExternalGlobalUtil,
  readHydrationInfo as ɵreadHydrationInfo,
  registerLocaleData as ɵregisterLocaleData,
  renderDeferBlockState as ɵrenderDeferBlockState,
  resetCompiledComponents as ɵresetCompiledComponents,
  resetJitOptions as ɵresetJitOptions,
  resolveComponentResources as ɵresolveComponentResources,
  restoreComponentResolutionQueue as ɵrestoreComponentResolutionQueue,
  setAllowDuplicateNgModuleIdsForTest as ɵsetAllowDuplicateNgModuleIdsForTest,
  setAlternateWeakRefImpl as ɵsetAlternateWeakRefImpl,
  ɵsetClassDebugInfo,
  setClassMetadata as ɵsetClassMetadata,
  setClassMetadataAsync as ɵsetClassMetadataAsync,
  setCurrentInjector as ɵsetCurrentInjector,
  setDocument as ɵsetDocument,
  setInjectorProfilerContext as ɵsetInjectorProfilerContext,
  setLocaleId as ɵsetLocaleId,
  ɵsetUnknownElementStrictMode,
  ɵsetUnknownPropertyStrictMode,
  startMeasuring as ɵstartMeasuring,
  stopMeasuring as ɵstopMeasuring,
  store as ɵstore,
  stringify as ɵstringify,
  transitiveScopesFor as ɵtransitiveScopesFor,
  triggerResourceLoading as ɵtriggerResourceLoading,
  truncateMiddle as ɵtruncateMiddle,
  unregisterAllLocaleData as ɵunregisterLocaleData,
  unwrapSafeValue as ɵunwrapSafeValue,
  ɵunwrapWritableSignal,
  withDomHydration as ɵwithDomHydration,
  withEventReplay as ɵwithEventReplay,
  withI18nSupport as ɵwithI18nSupport,
  withIncrementalHydration as ɵwithIncrementalHydration,
  ɵɵCopyDefinitionFeature,
  ɵɵExternalStylesFeature,
  FactoryTarget as ɵɵFactoryTarget,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵattributeInterpolate1,
  ɵɵattributeInterpolate2,
  ɵɵattributeInterpolate3,
  ɵɵattributeInterpolate4,
  ɵɵattributeInterpolate5,
  ɵɵattributeInterpolate6,
  ɵɵattributeInterpolate7,
  ɵɵattributeInterpolate8,
  ɵɵattributeInterpolateV,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassMapInterpolate2,
  ɵɵclassMapInterpolate3,
  ɵɵclassMapInterpolate4,
  ɵɵclassMapInterpolate5,
  ɵɵclassMapInterpolate6,
  ɵɵclassMapInterpolate7,
  ɵɵclassMapInterpolate8,
  ɵɵclassMapInterpolateV,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵcontentQuerySignal,
  ɵɵdeclareLet,
  ɵɵdefer,
  ɵɵdeferEnableTimerScheduling,
  ɵɵdeferHydrateNever,
  ɵɵdeferHydrateOnHover,
  ɵɵdeferHydrateOnIdle,
  ɵɵdeferHydrateOnImmediate,
  ɵɵdeferHydrateOnInteraction,
  ɵɵdeferHydrateOnTimer,
  ɵɵdeferHydrateOnViewport,
  ɵɵdeferHydrateWhen,
  ɵɵdeferOnHover,
  ɵɵdeferOnIdle,
  ɵɵdeferOnImmediate,
  ɵɵdeferOnInteraction,
  ɵɵdeferOnTimer,
  ɵɵdeferOnViewport,
  ɵɵdeferPrefetchOnHover,
  ɵɵdeferPrefetchOnIdle,
  ɵɵdeferPrefetchOnImmediate,
  ɵɵdeferPrefetchOnInteraction,
  ɵɵdeferPrefetchOnTimer,
  ɵɵdeferPrefetchOnViewport,
  ɵɵdeferPrefetchWhen,
  ɵɵdeferWhen,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵdisableBindings,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵenableBindings,
  ɵɵgetComponentDepsFactory,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵi18n,
  ɵɵi18nApply,
  ɵɵi18nAttributes,
  ɵɵi18nEnd,
  ɵɵi18nExp,
  ɵɵi18nPostprocess,
  ɵɵi18nStart,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵinvalidFactory,
  ɵɵinvalidFactoryDep,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceMathML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareClassMetadataAsync,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule,
  ɵɵngDeclarePipe,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵpipeBind4,
  ɵɵpipeBindV,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpropertyInterpolate2,
  ɵɵpropertyInterpolate3,
  ɵɵpropertyInterpolate4,
  ɵɵpropertyInterpolate5,
  ɵɵpropertyInterpolate6,
  ɵɵpropertyInterpolate7,
  ɵɵpropertyInterpolate8,
  ɵɵpropertyInterpolateV,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵpureFunction6,
  ɵɵpureFunction7,
  ɵɵpureFunction8,
  ɵɵpureFunctionV,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵreference,
  registerNgModuleType as ɵɵregisterNgModuleType,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵreplaceMetadata,
  ɵɵresetView,
  ɵɵresolveBody,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeScript,
  ɵɵsanitizeStyle,
  ɵɵsanitizeUrl,
  ɵɵsanitizeUrlOrResourceUrl,
  ɵɵsetComponentScope,
  ɵɵsetNgModuleScope,
  ɵɵstoreLet,
  ɵɵstyleMap,
  ɵɵstyleMapInterpolate1,
  ɵɵstyleMapInterpolate2,
  ɵɵstyleMapInterpolate3,
  ɵɵstyleMapInterpolate4,
  ɵɵstyleMapInterpolate5,
  ɵɵstyleMapInterpolate6,
  ɵɵstyleMapInterpolate7,
  ɵɵstyleMapInterpolate8,
  ɵɵstyleMapInterpolateV,
  ɵɵstyleProp,
  ɵɵstylePropInterpolate1,
  ɵɵstylePropInterpolate2,
  ɵɵstylePropInterpolate3,
  ɵɵstylePropInterpolate4,
  ɵɵstylePropInterpolate5,
  ɵɵstylePropInterpolate6,
  ɵɵstylePropInterpolate7,
  ɵɵstylePropInterpolate8,
  ɵɵstylePropInterpolateV,
  ɵɵsyntheticHostListener,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4,
  ɵɵtextInterpolate5,
  ɵɵtextInterpolate6,
  ɵɵtextInterpolate7,
  ɵɵtextInterpolate8,
  ɵɵtextInterpolateV,
  ɵɵtrustConstantHtml,
  ɵɵtrustConstantResourceUrl,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵvalidateIframeAttribute,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
};
//# sourceMappingURL=@angular_core.js.map
