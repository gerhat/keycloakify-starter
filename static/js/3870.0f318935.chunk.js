"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[3870],{1533:function(e,s,c){c.d(s,{a:function(){return n}});var a=c(5319),t=c(969);function n(e){var s=e.defaultClasses;return{useGetClassName:function(e){var c=e.classes;return{getClassName:(0,t.O)((function(e){return(0,a.W)(e,s[e],null===c||void 0===c?void 0:c[e])}))}}}}},7747:function(e,s,c){c.d(s,{M:function(){return o}});var a=c(2982),t=c(885),n=c(2791),l=c(1630),i=c(6196),r=c(5319);function o(e){var s=e.doFetchDefaultThemeResources,c=e.stylesCommon,r=e.styles,o=e.url,p=e.scripts,u=e.htmlClassName,f=e.bodyClassName,m=(0,n.useReducer)((function(){return!0}),!s),k=(0,t.Z)(m,2),h=k[0],g=k[1];return(0,n.useEffect)((function(){if(s){var e=!1;return Promise.all([].concat((0,a.Z)((null!==c&&void 0!==c?c:[]).map((function(e){return(0,i.pathJoin)(o.resourcesCommonPath,e)}))),(0,a.Z)((null!==r&&void 0!==r?r:[]).map((function(e){return(0,i.pathJoin)(o.resourcesPath,e)})))).reverse().map((function(e){return(0,l.t)({type:"css",href:e,position:"prepend"})}))).then((function(){e||g()})),(null!==p&&void 0!==p?p:[]).forEach((function(e){return(0,l.t)({type:"javascript",src:(0,i.pathJoin)(o.resourcesPath,e)})})),function(){e=!0}}}),[]),d({target:"html",className:u}),d({target:"body",className:f}),{isReady:h}}function d(e){var s=e.target,c=e.className;(0,n.useEffect)((function(){if(void 0!==c){var e=document.getElementsByTagName(s)[0].classList,t=(0,r.W)(c).split(" ");return e.add.apply(e,(0,a.Z)(t)),function(){e.remove.apply(e,(0,a.Z)(t))}}}),[c])}},3870:function(e,s,c){c.r(s),c.d(s,{default:function(){return r}});var a=c(184),t=c(8258),n=c(5319),l=c(7747),i=c(7107);function r(e){var s=e.displayInfo,c=void 0!==s&&s,r=e.displayMessage,o=void 0===r||r,d=e.displayRequiredFields,p=void 0!==d&&d,u=e.displayWide,f=void 0!==u&&u,m=e.showAnotherWayIfPresent,k=void 0===m||m,h=e.headerNode,g=e.showUsernameNode,C=void 0===g?null:g,j=e.infoNode,v=void 0===j?null:j,b=e.kcContext,y=e.i18n,x=e.doUseDefaultCss,N=e.classes,O=e.children,w=(0,i.v)({doUseDefaultCss:x,classes:N}).getClassName,F=y.msg,A=y.changeLocale,I=y.labelBySupportedLanguageTag,L=y.currentLanguageTag,W=b.realm,S=b.locale,T=b.auth,H=b.url,E=b.message,_=b.isAppInitiatedAction;return(0,l.M)({doFetchDefaultThemeResources:x,url:H,stylesCommon:["node_modules/patternfly/dist/css/patternfly.min.css","node_modules/patternfly/dist/css/patternfly-additions.min.css","lib/zocial/zocial.css"],styles:["css/login.css"],htmlClassName:w("kcHtmlClass"),bodyClassName:void 0}).isReady?(0,a.jsxs)("div",Object.assign({className:w("kcLoginClass")},{children:[(0,a.jsx)("div",Object.assign({id:"kc-header",className:w("kcHeaderClass")},{children:(0,a.jsx)("div",Object.assign({id:"kc-header-wrapper",className:w("kcHeaderWrapperClass")},{children:F("loginTitleHtml",W.displayNameHtml)}))})),(0,a.jsxs)("div",Object.assign({className:(0,n.W)(w("kcFormCardClass"),f&&w("kcFormCardAccountClass"))},{children:[(0,a.jsxs)("header",Object.assign({className:w("kcFormHeaderClass")},{children:[W.internationalizationEnabled&&((0,t.h)(void 0!==S),!0)&&S.supported.length>1&&(0,a.jsx)("div",Object.assign({id:"kc-locale"},{children:(0,a.jsx)("div",Object.assign({id:"kc-locale-wrapper",className:w("kcLocaleWrapperClass")},{children:(0,a.jsxs)("div",Object.assign({className:"kc-dropdown",id:"kc-locale-dropdown"},{children:[(0,a.jsx)("a",Object.assign({href:"#",id:"kc-current-locale-link"},{children:I[L]})),(0,a.jsx)("ul",{children:S.supported.map((function(e){var s=e.languageTag;return(0,a.jsx)("li",Object.assign({className:"kc-dropdown-item"},{children:(0,a.jsx)("a",Object.assign({href:"#",onClick:function(){return A(s)}},{children:I[s]}))}),s)}))})]}))}))})),void 0===T||!T.showUsername||T.showResetCredentials?p?(0,a.jsxs)("div",Object.assign({className:w("kcContentWrapperClass")},{children:[(0,a.jsx)("div",Object.assign({className:(0,n.W)(w("kcLabelWrapperClass"),"subtitle")},{children:(0,a.jsxs)("span",Object.assign({className:"subtitle"},{children:[(0,a.jsx)("span",Object.assign({className:"required"},{children:"*"})),F("requiredFields")]}))})),(0,a.jsx)("div",Object.assign({className:"col-md-10"},{children:(0,a.jsx)("h1",Object.assign({id:"kc-page-title"},{children:h}))}))]})):(0,a.jsx)("h1",Object.assign({id:"kc-page-title"},{children:h})):p?(0,a.jsxs)("div",Object.assign({className:w("kcContentWrapperClass")},{children:[(0,a.jsx)("div",Object.assign({className:(0,n.W)(w("kcLabelWrapperClass"),"subtitle")},{children:(0,a.jsxs)("span",Object.assign({className:"subtitle"},{children:[(0,a.jsx)("span",Object.assign({className:"required"},{children:"*"}))," ",F("requiredFields")]}))})),(0,a.jsxs)("div",Object.assign({className:"col-md-10"},{children:[C,(0,a.jsx)("div",Object.assign({className:w("kcFormGroupClass")},{children:(0,a.jsxs)("div",Object.assign({id:"kc-username"},{children:[(0,a.jsx)("label",Object.assign({id:"kc-attempted-username"},{children:null===T||void 0===T?void 0:T.attemptedUsername})),(0,a.jsx)("a",Object.assign({id:"reset-login",href:H.loginRestartFlowUrl},{children:(0,a.jsxs)("div",Object.assign({className:"kc-login-tooltip"},{children:[(0,a.jsx)("i",{className:w("kcResetFlowIcon")}),(0,a.jsx)("span",Object.assign({className:"kc-tooltip-text"},{children:F("restartLoginTooltip")}))]}))}))]}))}))]}))]})):(0,a.jsxs)(a.Fragment,{children:[C,(0,a.jsx)("div",Object.assign({className:w("kcFormGroupClass")},{children:(0,a.jsxs)("div",Object.assign({id:"kc-username"},{children:[(0,a.jsx)("label",Object.assign({id:"kc-attempted-username"},{children:null===T||void 0===T?void 0:T.attemptedUsername})),(0,a.jsx)("a",Object.assign({id:"reset-login",href:H.loginRestartFlowUrl},{children:(0,a.jsxs)("div",Object.assign({className:"kc-login-tooltip"},{children:[(0,a.jsx)("i",{className:w("kcResetFlowIcon")}),(0,a.jsx)("span",Object.assign({className:"kc-tooltip-text"},{children:F("restartLoginTooltip")}))]}))}))]}))}))]})]})),(0,a.jsx)("div",Object.assign({id:"kc-content"},{children:(0,a.jsxs)("div",Object.assign({id:"kc-content-wrapper"},{children:[o&&void 0!==E&&("warning"!==E.type||!_)&&(0,a.jsxs)("div",Object.assign({className:(0,n.W)("alert","alert-".concat(E.type))},{children:["success"===E.type&&(0,a.jsx)("span",{className:w("kcFeedbackSuccessIcon")}),"warning"===E.type&&(0,a.jsx)("span",{className:w("kcFeedbackWarningIcon")}),"error"===E.type&&(0,a.jsx)("span",{className:w("kcFeedbackErrorIcon")}),"info"===E.type&&(0,a.jsx)("span",{className:w("kcFeedbackInfoIcon")}),(0,a.jsx)("span",{className:"kc-feedback-text",dangerouslySetInnerHTML:{__html:E.summary}})]})),O,void 0!==T&&T.showTryAnotherWayLink&&k&&(0,a.jsx)("form",Object.assign({id:"kc-select-try-another-way-form",action:H.loginAction,method:"post",className:(0,n.W)(f&&w("kcContentWrapperClass"))},{children:(0,a.jsx)("div",Object.assign({className:(0,n.W)(f&&[w("kcFormSocialAccountContentClass"),w("kcFormSocialAccountClass")])},{children:(0,a.jsxs)("div",Object.assign({className:w("kcFormGroupClass")},{children:[(0,a.jsx)("input",{type:"hidden",name:"tryAnotherWay",value:"on"}),(0,a.jsx)("a",Object.assign({href:"#",id:"try-another-way",onClick:function(){return document.forms["kc-select-try-another-way-form"].submit(),!1}},{children:F("doTryAnotherWay")}))]}))}))})),c&&(0,a.jsx)("div",Object.assign({id:"kc-info",className:w("kcSignUpClass")},{children:(0,a.jsx)("div",Object.assign({id:"kc-info-wrapper",className:w("kcInfoAreaWrapperClass")},{children:v}))}))]}))}))]}))]})):null}},7107:function(e,s,c){c.d(s,{v:function(){return a}});var a=(0,c(1533).a)({defaultClasses:{kcHtmlClass:"login-pf",kcLoginClass:"login-pf-page",kcContentWrapperClass:"row",kcHeaderClass:"login-pf-page-header",kcHeaderWrapperClass:void 0,kcFormCardClass:"card-pf",kcFormCardAccountClass:"login-pf-accounts",kcFormSocialAccountClass:"login-pf-social-section",kcFormSocialAccountContentClass:"col-xs-12 col-sm-6",kcFormHeaderClass:"login-pf-header",kcLocaleWrapperClass:void 0,kcFeedbackErrorIcon:"pficon pficon-error-circle-o",kcFeedbackWarningIcon:"pficon pficon-warning-triangle-o",kcFeedbackSuccessIcon:"pficon pficon-ok",kcFeedbackInfoIcon:"pficon pficon-info",kcResetFlowIcon:"pficon pficon-arrow fa-2x",kcFormGroupClass:"form-group",kcLabelWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcSignUpClass:"login-pf-signup",kcInfoAreaWrapperClass:void 0,kcLogoClass:"login-pf-brand",kcContainerClass:"container-fluid",kcContentClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",kcFeedbackAreaClass:"col-md-12",kcLocaleClass:"col-xs-12 col-sm-1",kcAlertIconClasserror:"pficon pficon-error-circle-o",kcFormAreaClass:"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",kcFormSocialAccountListClass:"login-pf-social list-unstyled login-pf-social-all",kcFormSocialAccountDoubleListClass:"login-pf-social-double-col",kcFormSocialAccountListLinkClass:"login-pf-social-link",kcWebAuthnKeyIcon:"pficon pficon-key",kcWebAuthnDefaultIcon:"pficon pficon-key",kcFormClass:"form-horizontal",kcFormGroupErrorClass:"has-error",kcLabelClass:"control-label",kcInputClass:"form-control",kcInputErrorMessageClass:"pf-c-form__helper-text pf-m-error required kc-feedback-text",kcInputWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormOptionsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormSettingClass:"login-pf-settings",kcTextareaClass:"form-control",kcInfoAreaClass:"col-xs-12 col-sm-4 col-md-4 col-lg-5 details",kcFormGroupHeader:"pf-c-form__group",kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonDefaultClass:"btn-default",kcButtonLargeClass:"btn-lg",kcButtonBlockClass:"btn-block",kcInputLargeClass:"input-lg",kcSrOnlyClass:"sr-only",kcSelectAuthListClass:"list-group list-view-pf",kcSelectAuthListItemClass:"list-group-item list-view-pf-stacked",kcSelectAuthListItemFillClass:"pf-l-split__item pf-m-fill",kcSelectAuthListItemIconPropertyClass:"fa-2x select-auth-box-icon-properties",kcSelectAuthListItemIconClass:"pf-l-split__item select-auth-box-icon",kcSelectAuthListItemTitle:"select-auth-box-paragraph",kcSelectAuthListItemInfoClass:"list-view-pf-main-info",kcSelectAuthListItemLeftClass:"list-view-pf-left",kcSelectAuthListItemBodyClass:"list-view-pf-body",kcSelectAuthListItemDescriptionClass:"list-view-pf-description",kcSelectAuthListItemHeadingClass:"list-group-item-heading",kcSelectAuthListItemHelpTextClass:"list-group-item-text",kcAuthenticatorDefaultClass:"fa list-view-pf-icon-lg",kcAuthenticatorPasswordClass:"fa fa-unlock list-view-pf-icon-lg",kcAuthenticatorOTPClass:"fa fa-mobile list-view-pf-icon-lg",kcAuthenticatorWebAuthnClass:"fa fa-key list-view-pf-icon-lg",kcAuthenticatorWebAuthnPasswordlessClass:"fa fa-key list-view-pf-icon-lg",kcSelectOTPListClass:"card-pf card-pf-view card-pf-view-select card-pf-view-single-select",kcSelectOTPListItemClass:"card-pf-body card-pf-top-element",kcAuthenticatorOtpCircleClass:"fa fa-mobile card-pf-icon-circle",kcSelectOTPItemHeadingClass:"card-pf-title text-center",kcFormOptionsWrapperClass:void 0}}).useGetClassName},4943:function(){HTMLElement.prototype.prepend||(HTMLElement.prototype.prepend=function(e){if("string"===typeof e)throw new Error("Error with HTMLElement.prototype.appendFirst polyfill");this.insertBefore(e,this.firstChild)})},8258:function(e,s,c){c.d(s,{h:function(){return a.h}});var a=c(9883)},5319:function(e,s,c){c.d(s,{W:function(){return l}});var a=c(2982),t=c(9883);function n(e,s){return s}var l=function e(){for(var s=arguments.length,c=0,l="";c<s;c++){var i=c<0||arguments.length<=c?void 0:arguments[c];if(null!=i){var r=void 0;switch(typeof i){case"boolean":break;case"object":if(Array.isArray(i))r=e.apply(void 0,(0,a.Z)(i));else for(var o in(0,t.h)(!n(0,!1)),r="",i)i[o]&&o&&(r&&(r+=" "),r+=o);break;default:r=i}r&&(l&&(l+=" "),l+=r)}}return l}},1630:function(e,s,c){c.d(s,{t:function(){return t}});c(4943);var a=c(9595);function t(e){var s=document.createElement(function(){switch(e.type){case"css":return"link";case"javascript":return"script"}}()),c=new a.Deferred;return s.addEventListener("load",(function(){return c.resolve()})),Object.assign(s,function(){switch(e.type){case"css":return{href:e.href,type:"text/css",rel:"stylesheet",media:"screen,print"};case"javascript":return{src:e.src,type:"text/javascript"}}}()),document.getElementsByTagName("head")[0][function(){switch(e.type){case"javascript":return"appendChild";case"css":return function(){switch(e.position){case"append":return"appendChild";case"prepend":return"prepend"}}()}}()](s),c.pr}}}]);
//# sourceMappingURL=3870.0f318935.chunk.js.map