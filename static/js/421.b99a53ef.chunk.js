"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[421],{421:function(e,t,c){c.r(t),c.d(t,{default:function(){return i}});var s=c(5319),o=c(2597),l=c(1644),a=c(7107),r=c(9238),n=c(184);function i(e){var t=e.kcContext,c=e.i18n,i=e.doUseDefaultCss,u=e.Template,f=e.classes,p=(0,a.v)({doUseDefaultCss:i,classes:f}).getClassName,d=c.msg,k=c.msgStr;(0,o.Lf)(r.R);var m=t.url;return void 0===r.R.state?null:(0,n.jsxs)(u,{kcContext:t,i18n:c,doUseDefaultCss:i,classes:f,displayMessage:!1,headerNode:d("termsTitle"),children:[(0,n.jsx)("div",{id:"kc-terms-text",children:r.R.state&&(0,n.jsx)(l.U,{children:r.R.state})}),(0,n.jsxs)("form",{className:"form-actions",action:m.loginAction,method:"POST",children:[(0,n.jsx)("input",{className:(0,s.W)(p("kcButtonClass"),p("kcButtonClass"),p("kcButtonClass"),p("kcButtonPrimaryClass"),p("kcButtonLargeClass")),name:"accept",id:"kc-accept",type:"submit",value:k("doAccept")}),(0,n.jsx)("input",{className:(0,s.W)(p("kcButtonClass"),p("kcButtonDefaultClass"),p("kcButtonLargeClass")),name:"cancel",id:"kc-decline",type:"submit",value:k("doDecline")})]}),(0,n.jsx)("div",{className:"clearfix"})]})}},2597:function(e,t,c){t.Lf=void 0;var s=c(8121);var o=c(8848);Object.defineProperty(t,"Lf",{enumerable:!0,get:function(){return o.useRerenderOnStateChange}})},8121:function(e,t,c){var s=this&&this.__createBinding||(Object.create?function(e,t,c,s){void 0===s&&(s=c);var o=Object.getOwnPropertyDescriptor(t,c);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[c]}}),Object.defineProperty(e,s,o)}:function(e,t,c,s){void 0===s&&(s=c),e[s]=t[c]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var c in e)"default"!==c&&Object.prototype.hasOwnProperty.call(e,c)&&s(t,e,c);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.useEvt=void 0;var a=c(8252),r=l(c(2791)).useEffect;t.useEvt=function(e,t){r((function(){var t=a.Evt.newCtx();return e(t),function(){t.done()}}),t)}},8848:function(e,t,c){var s=this&&this.__createBinding||(Object.create?function(e,t,c,s){void 0===s&&(s=c);var o=Object.getOwnPropertyDescriptor(t,c);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[c]}}),Object.defineProperty(e,s,o)}:function(e,t,c,s){void 0===s&&(s=c),e[s]=t[c]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var c in e)"default"!==c&&Object.prototype.hasOwnProperty.call(e,c)&&s(t,e,c);return o(t,e),t},a=this&&this.__read||function(e,t){var c="function"===typeof Symbol&&e[Symbol.iterator];if(!c)return e;var s,o,l=c.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(s=l.next()).done;)a.push(s.value)}catch(r){o={error:r}}finally{try{s&&!s.done&&(c=l.return)&&c.call(l)}finally{if(o)throw o.error}}return a};Object.defineProperty(t,"__esModule",{value:!0}),t.useRerenderOnStateChange=void 0;var r=c(8121),n=l(c(2791)).useState;t.useRerenderOnStateChange=function(e){var t=a(n((function(){return e.state})),2)[1];(0,r.useEvt)((function(c){return e.attach(c,(function(e){return t((function(){return e}))}))}),[e])}},1533:function(e,t,c){c.d(t,{a:function(){return l}});var s=c(5319),o=c(969);function l(e){var t=e.defaultClasses;return{useGetClassName:function(e){var c=e.classes;return{getClassName:(0,o.O)((function(e){return(0,s.W)(e,t[e],null===c||void 0===c?void 0:c[e])}))}}}}},7107:function(e,t,c){c.d(t,{v:function(){return s}});var s=(0,c(1533).a)({defaultClasses:{kcHtmlClass:"login-pf",kcLoginClass:"login-pf-page",kcContentWrapperClass:"row",kcHeaderClass:"login-pf-page-header",kcHeaderWrapperClass:void 0,kcFormCardClass:"card-pf",kcFormCardAccountClass:"login-pf-accounts",kcFormSocialAccountClass:"login-pf-social-section",kcFormSocialAccountContentClass:"col-xs-12 col-sm-6",kcFormHeaderClass:"login-pf-header",kcLocaleWrapperClass:void 0,kcFeedbackErrorIcon:"pficon pficon-error-circle-o",kcFeedbackWarningIcon:"pficon pficon-warning-triangle-o",kcFeedbackSuccessIcon:"pficon pficon-ok",kcFeedbackInfoIcon:"pficon pficon-info",kcResetFlowIcon:"pficon pficon-arrow fa-2x",kcFormGroupClass:"form-group",kcLabelWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcSignUpClass:"login-pf-signup",kcInfoAreaWrapperClass:void 0,kcLogoClass:"login-pf-brand",kcContainerClass:"container-fluid",kcContentClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",kcFeedbackAreaClass:"col-md-12",kcLocaleClass:"col-xs-12 col-sm-1",kcAlertIconClasserror:"pficon pficon-error-circle-o",kcFormAreaClass:"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",kcFormSocialAccountListClass:"login-pf-social list-unstyled login-pf-social-all",kcFormSocialAccountDoubleListClass:"login-pf-social-double-col",kcFormSocialAccountListLinkClass:"login-pf-social-link",kcWebAuthnKeyIcon:"pficon pficon-key",kcWebAuthnDefaultIcon:"pficon pficon-key",kcFormClass:"form-horizontal",kcFormGroupErrorClass:"has-error",kcLabelClass:"control-label",kcInputClass:"form-control",kcInputErrorMessageClass:"pf-c-form__helper-text pf-m-error required kc-feedback-text",kcInputWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormOptionsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormSettingClass:"login-pf-settings",kcTextareaClass:"form-control",kcInfoAreaClass:"col-xs-12 col-sm-4 col-md-4 col-lg-5 details",kcFormGroupHeader:"pf-c-form__group",kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonDefaultClass:"btn-default",kcButtonLargeClass:"btn-lg",kcButtonBlockClass:"btn-block",kcInputLargeClass:"input-lg",kcSrOnlyClass:"sr-only",kcSelectAuthListClass:"list-group list-view-pf",kcSelectAuthListItemClass:"list-group-item list-view-pf-stacked",kcSelectAuthListItemFillClass:"pf-l-split__item pf-m-fill",kcSelectAuthListItemIconPropertyClass:"fa-2x select-auth-box-icon-properties",kcSelectAuthListItemIconClass:"pf-l-split__item select-auth-box-icon",kcSelectAuthListItemTitle:"select-auth-box-paragraph",kcSelectAuthListItemInfoClass:"list-view-pf-main-info",kcSelectAuthListItemLeftClass:"list-view-pf-left",kcSelectAuthListItemBodyClass:"list-view-pf-body",kcSelectAuthListItemDescriptionClass:"list-view-pf-description",kcSelectAuthListItemHeadingClass:"list-group-item-heading",kcSelectAuthListItemHelpTextClass:"list-group-item-text",kcAuthenticatorDefaultClass:"fa list-view-pf-icon-lg",kcAuthenticatorPasswordClass:"fa fa-unlock list-view-pf-icon-lg",kcAuthenticatorOTPClass:"fa fa-mobile list-view-pf-icon-lg",kcAuthenticatorWebAuthnClass:"fa fa-key list-view-pf-icon-lg",kcAuthenticatorWebAuthnPasswordlessClass:"fa fa-key list-view-pf-icon-lg",kcSelectOTPListClass:"card-pf card-pf-view card-pf-view-select card-pf-view-single-select",kcSelectOTPListItemClass:"card-pf-body card-pf-top-element",kcAuthenticatorOtpCircleClass:"fa fa-mobile card-pf-icon-circle",kcSelectOTPItemHeadingClass:"card-pf-title text-center",kcFormOptionsWrapperClass:void 0}}).useGetClassName},5319:function(e,t,c){c.d(t,{W:function(){return a}});var s=c(2982),o=c(9883);function l(e,t){return t}var a=function e(){for(var t=arguments.length,c=0,a="";c<t;c++){var r=c<0||arguments.length<=c?void 0:arguments[c];if(null!=r){var n=void 0;switch(typeof r){case"boolean":break;case"object":if(Array.isArray(r))n=e.apply(void 0,(0,s.Z)(r));else for(var i in(0,o.h)(!l(0,!1)),n="",r)r[i]&&i&&(n&&(n+=" "),n+=i);break;default:n=r}n&&(a&&(a+=" "),a+=n)}}return a}}}]);
//# sourceMappingURL=421.b99a53ef.chunk.js.map