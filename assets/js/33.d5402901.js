(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{265:function(t,e,s){"use strict";s.r(e);var a=s(16),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mobile-sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mobile-sdk"}},[t._v("#")]),t._v(" Mobile SDK")]),t._v(" "),s("img",{staticStyle:{width:"200px","max-width":"40%","margin-right":"1em"},attrs:{src:"/images/msdk/msdk2-home1.png"}}),t._v(" "),s("img",{staticStyle:{width:"200px","max-width":"40%"},attrs:{src:"/images/msdk/msdk2-home2.png"}}),t._v(" "),s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting started")]),t._v(" "),s("p",[t._v("In order to use our Mobile SDK you should:")]),t._v(" "),s("ul",[s("li",[t._v("Do some "),s("a",{attrs:{href:"#backend-routines"}},[t._v("backend preparations")])]),t._v(" "),s("li",[t._v("Choose the platform:\n"),s("ul",[s("li",[s("a",{attrs:{href:"#native-sdks"}},[t._v("Native SDKs")])]),t._v(" "),s("li",[s("router-link",{attrs:{to:"/msdk/plugins/"}},[t._v("Mobile Framework")])],1)])])]),t._v(" "),s("h2",{attrs:{id:"backend-routines"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backend-routines"}},[t._v("#")]),t._v(" Backend routines")]),t._v(" "),s("p",[t._v("In order to embed our MobileSDK, you have to complete a couple of preparation steps on your "),s("strong",[t._v("backend")]),t._v(" and use the results to pass into the MobileSDK initialization:")]),t._v(" "),s("h3",{attrs:{id:"step-1-applicant-level"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-1-applicant-level"}},[t._v("#")]),t._v(" Step 1: Applicant Level")]),t._v(" "),s("p",[t._v("Set up your "),s("a",{attrs:{href:"https://api.sumsub.com/checkus#/sdkIntegrations/levels",target:"_blank",rel:"noopener noreferrer"}},[t._v("applicant level"),s("OutboundLink")],1),t._v(" or pick a predefined one (e.g. "),s("code",[t._v("basic-kyc-level")]),t._v(") in the dashboard")]),t._v(" "),s("h3",{attrs:{id:"step-2-access-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-2-access-token"}},[t._v("#")]),t._v(" Step 2: Access Token")]),t._v(" "),s("p",[t._v("Generate an "),s("router-link",{attrs:{to:"/api-reference/#access-tokens-for-sdks"}},[t._v("access token")]),t._v(" that is associated with the "),s("code",[t._v("userId")]),t._v(" - a user identifier in your system, and with the "),s("code",[t._v("levelName")]),t._v(" - the name of the applicant level selected at Step 1. This way you restrain the access to the only one applicant and let the SDK know what applicant level you are going to use for the verification process.")],1),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("For testing purposes, make sure to use App token and Secret key pair that was created on Sandbox for "),s("router-link",{attrs:{to:"/api-reference/#app-tokens"}},[t._v("request authorization headers")]),t._v(".")],1)]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X POST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.sumsub.com/resources/accessTokens?userId=SomeUserIdInYourSystem&levelName=basic-kyc-level&ttlInSecs=600'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Accept: application/json'")]),t._v("\n")])])]),s("h3",{attrs:{id:"step-3-all-done"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-3-all-done"}},[t._v("#")]),t._v(" Step 3: All done!")]),t._v(" "),s("p",[t._v("Now you can initialize the Mobile SDK.")]),t._v(" "),s("h2",{attrs:{id:"native-sdks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#native-sdks"}},[t._v("#")]),t._v(" Native SDKs")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/msdk/ios/"}},[t._v("iOS SDK")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/msdk/android/"}},[t._v("Android SDK")])],1)]),t._v(" "),s("h2",{attrs:{id:"frameworks-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frameworks-plugins"}},[t._v("#")]),t._v(" Frameworks Plugins")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/msdk/plugins/cordova.html"}},[t._v("Cordova plugin")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/msdk/plugins/react-native.html"}},[t._v("React Native module")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/msdk/plugins/flutter.html"}},[t._v("Flutter plugin")])],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);