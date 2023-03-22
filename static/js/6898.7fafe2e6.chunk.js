"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[6898],{1533:function(e,t,s){s.d(t,{a:function(){return c}});var a=s(5319),n=s(969);function c(e){var t=e.defaultClasses;return{useGetClassName:function(e){var s=e.classes;return{getClassName:(0,n.O)((function(e){return(0,a.W)(e,t[e],null===s||void 0===s?void 0:s[e])}))}}}}},7107:function(e,t,s){s.d(t,{v:function(){return a}});var a=(0,s(1533).a)({defaultClasses:{kcHtmlClass:"login-pf",kcLoginClass:"login-pf-page",kcContentWrapperClass:"row",kcHeaderClass:"login-pf-page-header",kcHeaderWrapperClass:void 0,kcFormCardClass:"card-pf",kcFormCardAccountClass:"login-pf-accounts",kcFormSocialAccountClass:"login-pf-social-section",kcFormSocialAccountContentClass:"col-xs-12 col-sm-6",kcFormHeaderClass:"login-pf-header",kcLocaleWrapperClass:void 0,kcFeedbackErrorIcon:"pficon pficon-error-circle-o",kcFeedbackWarningIcon:"pficon pficon-warning-triangle-o",kcFeedbackSuccessIcon:"pficon pficon-ok",kcFeedbackInfoIcon:"pficon pficon-info",kcResetFlowIcon:"pficon pficon-arrow fa-2x",kcFormGroupClass:"form-group",kcLabelWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcSignUpClass:"login-pf-signup",kcInfoAreaWrapperClass:void 0,kcLogoClass:"login-pf-brand",kcContainerClass:"container-fluid",kcContentClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",kcFeedbackAreaClass:"col-md-12",kcLocaleClass:"col-xs-12 col-sm-1",kcAlertIconClasserror:"pficon pficon-error-circle-o",kcFormAreaClass:"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",kcFormSocialAccountListClass:"login-pf-social list-unstyled login-pf-social-all",kcFormSocialAccountDoubleListClass:"login-pf-social-double-col",kcFormSocialAccountListLinkClass:"login-pf-social-link",kcWebAuthnKeyIcon:"pficon pficon-key",kcWebAuthnDefaultIcon:"pficon pficon-key",kcFormClass:"form-horizontal",kcFormGroupErrorClass:"has-error",kcLabelClass:"control-label",kcInputClass:"form-control",kcInputErrorMessageClass:"pf-c-form__helper-text pf-m-error required kc-feedback-text",kcInputWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormOptionsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormSettingClass:"login-pf-settings",kcTextareaClass:"form-control",kcInfoAreaClass:"col-xs-12 col-sm-4 col-md-4 col-lg-5 details",kcFormGroupHeader:"pf-c-form__group",kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonDefaultClass:"btn-default",kcButtonLargeClass:"btn-lg",kcButtonBlockClass:"btn-block",kcInputLargeClass:"input-lg",kcSrOnlyClass:"sr-only",kcSelectAuthListClass:"list-group list-view-pf",kcSelectAuthListItemClass:"list-group-item list-view-pf-stacked",kcSelectAuthListItemFillClass:"pf-l-split__item pf-m-fill",kcSelectAuthListItemIconPropertyClass:"fa-2x select-auth-box-icon-properties",kcSelectAuthListItemIconClass:"pf-l-split__item select-auth-box-icon",kcSelectAuthListItemTitle:"select-auth-box-paragraph",kcSelectAuthListItemInfoClass:"list-view-pf-main-info",kcSelectAuthListItemLeftClass:"list-view-pf-left",kcSelectAuthListItemBodyClass:"list-view-pf-body",kcSelectAuthListItemDescriptionClass:"list-view-pf-description",kcSelectAuthListItemHeadingClass:"list-group-item-heading",kcSelectAuthListItemHelpTextClass:"list-group-item-text",kcAuthenticatorDefaultClass:"fa list-view-pf-icon-lg",kcAuthenticatorPasswordClass:"fa fa-unlock list-view-pf-icon-lg",kcAuthenticatorOTPClass:"fa fa-mobile list-view-pf-icon-lg",kcAuthenticatorWebAuthnClass:"fa fa-key list-view-pf-icon-lg",kcAuthenticatorWebAuthnPasswordlessClass:"fa fa-key list-view-pf-icon-lg",kcSelectOTPListClass:"card-pf card-pf-view card-pf-view-select card-pf-view-single-select",kcSelectOTPListItemClass:"card-pf-body card-pf-top-element",kcAuthenticatorOtpCircleClass:"fa fa-mobile card-pf-icon-circle",kcSelectOTPItemHeadingClass:"card-pf-title text-center",kcFormOptionsWrapperClass:void 0}}).useGetClassName},6898:function(e,t,s){s.r(t),s.d(t,{default:function(){return f}});var a=s(885),n=s(8214),c=s(5861),r=s(184),i=s(2791),l=s(5319),o=s(3062),u=(o.YU,o.pJ,o.eV,o.US,o.tH),p=(o.Y2,s(969)),d=s(7107);function f(e){var t=e.kcContext,s=e.i18n,o=e.doUseDefaultCss,f=e.Template,h=e.classes,k=(0,d.v)({doUseDefaultCss:o,classes:h}).getClassName,m=t.url,g=s.msg,C=s.msgStr,b=t.authenticators,v=t.challenge,x=t.shouldDisplayAuthenticators,y=t.userVerification,A=t.rpId,I=Number(t.createTimeout),w="true"==t.isUserIdentified,S=(0,p.O)((0,c.Z)((0,n.Z)().mark((function e(){var t,s,a,c,r,i,l,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w){e.next=2;break}return e.abrupt("return");case 2:if(t=b.authenticators.map((function(e){return{id:u.parse(e.credentialId,{loose:!0}),type:"public-key"}})),window.PublicKeyCredential){e.next=7;break}return X(C("webauthn-unsupported-browser-text")),L(),e.abrupt("return");case 7:return s={rpId:A,challenge:u.parse(v,{loose:!0})},0!==I&&(s.timeout=1e3*I),t.length&&(s.allowCredentials=t),"not specified"!==y&&(s.userVerification=y),e.prev=11,e.next=14,navigator.credentials.get({publicKey:s});case 14:if((a=e.sent)&&"public-key"==a.type){e.next=17;break}return e.abrupt("return");case 17:if("authenticatorData"in(c=a).response){e.next=20;break}return e.abrupt("return");case 20:r=c.response,i=r.clientDataJSON,l=r.authenticatorData,o=r.signature,D(u.stringify(new Uint8Array(i),{pad:!1})),H(u.stringify(new Uint8Array(l),{pad:!1})),Z(u.stringify(new Uint8Array(o),{pad:!1})),V(c.id),M(u.stringify(new Uint8Array(r.userHandle),{pad:!1})),L(),e.next=36;break;case 32:e.prev=32,e.t0=e.catch(11),X(String(e.t0)),L();case 36:case"end":return e.stop()}}),e,null,[[11,32]])})))),j=(0,i.useRef)(null),L=(0,p.O)((function(){j.current.submit()})),F=(0,i.useState)(""),O=(0,a.Z)(F,2),N=O[0],D=O[1],B=(0,i.useState)(""),U=(0,a.Z)(B,2),W=U[0],H=U[1],P=(0,i.useState)(""),T=(0,a.Z)(P,2),_=T[0],Z=T[1],E=(0,i.useState)(""),G=(0,a.Z)(E,2),J=G[0],V=G[1],K=(0,i.useState)(""),Y=(0,a.Z)(K,2),R=Y[0],M=Y[1],Q=(0,i.useState)(""),q=(0,a.Z)(Q,2),z=q[0],X=q[1];return(0,r.jsx)(f,Object.assign({},{kcContext:t,i18n:s,doUseDefaultCss:o,classes:h},{headerNode:g("webauthn-login-title")},{children:(0,r.jsxs)("div",Object.assign({id:"kc-form-webauthn",className:k("kcFormClass")},{children:[(0,r.jsxs)("form",Object.assign({id:"webauth",action:m.loginAction,ref:j,method:"post"},{children:[(0,r.jsx)("input",{type:"hidden",id:"clientDataJSON",name:"clientDataJSON",value:N}),(0,r.jsx)("input",{type:"hidden",id:"authenticatorData",name:"authenticatorData",value:W}),(0,r.jsx)("input",{type:"hidden",id:"signature",name:"signature",value:_}),(0,r.jsx)("input",{type:"hidden",id:"credentialId",name:"credentialId",value:J}),(0,r.jsx)("input",{type:"hidden",id:"userHandle",name:"userHandle",value:R}),(0,r.jsx)("input",{type:"hidden",id:"error",name:"error",value:z})]})),(0,r.jsxs)("div",Object.assign({className:k("kcFormGroupClass")},{children:[b&&(0,r.jsx)("form",Object.assign({id:"authn_select",className:k("kcFormClass")},{children:b.authenticators.map((function(e){return(0,r.jsx)("input",{type:"hidden",name:"authn_use_chk",value:e.credentialId},e.credentialId)}))})),b&&x&&(0,r.jsxs)(r.Fragment,{children:[b.authenticators.length>1&&(0,r.jsx)("p",Object.assign({className:k("kcSelectAuthListItemTitle")},{children:g("webauthn-available-authenticators")})),(0,r.jsx)("div",Object.assign({className:k("kcFormClass")},{children:b.authenticators.map((function(e){return(0,r.jsxs)("div",Object.assign({id:"kc-webauthn-authenticator",className:k("kcSelectAuthListItemClass")},{children:[(0,r.jsx)("div",Object.assign({className:k("kcSelectAuthListItemIconClass")},{children:(0,r.jsx)("i",{className:(0,l.W)(function(){var t=k(e.transports.iconClass);return t.includes(" ")?t:[t,k("kcWebAuthnDefaultIcon")]}(),k("kcSelectAuthListItemIconPropertyClass"))})})),(0,r.jsxs)("div",Object.assign({className:k("kcSelectAuthListItemBodyClass")},{children:[(0,r.jsx)("div",Object.assign({id:"kc-webauthn-authenticator-label",className:k("kcSelectAuthListItemHeadingClass")},{children:e.label})),e.transports&&e.transports.displayNameProperties.length&&(0,r.jsx)("div",Object.assign({id:"kc-webauthn-authenticator-transport",className:k("kcSelectAuthListItemDescriptionClass")},{children:e.transports.displayNameProperties.map((function(t,s){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{children:g(t)}),s<e.transports.displayNameProperties.length-1&&(0,r.jsx)("span",{children:", "})]})}))})),(0,r.jsxs)("div",Object.assign({className:k("kcSelectAuthListItemDescriptionClass")},{children:[(0,r.jsx)("span",Object.assign({id:"kc-webauthn-authenticator-created-label"},{children:g("webauthn-createdAt-label")})),(0,r.jsx)("span",Object.assign({id:"kc-webauthn-authenticator-created"},{children:e.createdAt}))]}))]})),(0,r.jsx)("div",{className:k("kcSelectAuthListItemFillClass")})]}))}))}))]}),(0,r.jsx)("div",Object.assign({id:"kc-form-buttons",className:k("kcFormButtonsClass")},{children:(0,r.jsx)("input",{id:"authenticateWebAuthnButton",type:"button",onClick:S,autoFocus:!0,value:C("webauthn-doAuthenticate"),className:(0,l.W)(k("kcButtonClass"),k("kcButtonPrimaryClass"),k("kcButtonBlockClass"),k("kcButtonLargeClass"))})}))]}))]}))}))}},5319:function(e,t,s){s.d(t,{W:function(){return r}});var a=s(2982),n=s(9883);function c(e,t){return t}var r=function e(){for(var t=arguments.length,s=0,r="";s<t;s++){var i=s<0||arguments.length<=s?void 0:arguments[s];if(null!=i){var l=void 0;switch(typeof i){case"boolean":break;case"object":if(Array.isArray(i))l=e.apply(void 0,(0,a.Z)(i));else for(var o in(0,n.h)(!c(0,!1)),l="",i)i[o]&&o&&(l&&(l+=" "),l+=o);break;default:l=i}l&&(r&&(r+=" "),r+=l)}}return r}},3062:function(e,t){function s(e,t,s){var a;if(void 0===s&&(s={}),!t.codes){t.codes={};for(var n=0;n<t.chars.length;++n)t.codes[t.chars[n]]=n}if(!s.loose&&e.length*t.bits&7)throw new SyntaxError("Invalid padding");for(var c=e.length;"="===e[c-1];)if(--c,!s.loose&&!((e.length-c)*t.bits&7))throw new SyntaxError("Invalid padding");for(var r=new(null!=(a=s.out)?a:Uint8Array)(c*t.bits/8|0),i=0,l=0,o=0,u=0;u<c;++u){var p=t.codes[e[u]];if(void 0===p)throw new SyntaxError("Invalid character "+e[u]);l=l<<t.bits|p,(i+=t.bits)>=8&&(i-=8,r[o++]=255&l>>i)}if(i>=t.bits||255&l<<8-i)throw new SyntaxError("Unexpected end of data");return r}function a(e,t,s){void 0===s&&(s={});for(var a=s.pad,n=void 0===a||a,c=(1<<t.bits)-1,r="",i=0,l=0,o=0;o<e.length;++o)for(l=l<<8|255&e[o],i+=8;i>t.bits;)i-=t.bits,r+=t.chars[c&l>>i];if(i&&(r+=t.chars[c&l<<t.bits-i]),n)for(;r.length*t.bits&7;)r+="=";return r}var n={chars:"0123456789ABCDEF",bits:4},c={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bits:5},r={chars:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bits:5},i={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bits:6},l={chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bits:6},o={parse:function(e,t){return s(e.toUpperCase(),n,t)},stringify:function(e,t){return a(e,n,t)}},u={parse:function(e,t){return void 0===t&&(t={}),s(t.loose?e.toUpperCase().replace(/0/g,"O").replace(/1/g,"L").replace(/8/g,"B"):e,c,t)},stringify:function(e,t){return a(e,c,t)}},p={parse:function(e,t){return s(e,r,t)},stringify:function(e,t){return a(e,r,t)}},d={parse:function(e,t){return s(e,i,t)},stringify:function(e,t){return a(e,i,t)}},f={parse:function(e,t){return s(e,l,t)},stringify:function(e,t){return a(e,l,t)}},h={parse:s,stringify:a};t.YU=o,t.pJ=u,t.eV=p,t.US=d,t.tH=f,t.Y2=h}}]);
//# sourceMappingURL=6898.7fafe2e6.chunk.js.map