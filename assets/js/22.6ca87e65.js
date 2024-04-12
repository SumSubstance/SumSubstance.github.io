(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{255:function(t,e,s){"use strict";s.r(e);var a=s(16),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"video-ident-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#video-ident-api"}},[t._v("#")]),t._v(" Video Ident API")]),t._v(" "),s("p",[t._v("Video Ident API methods allows you to get all required data gathered during video call. Please check for Video Ident product at our "),s("a",{attrs:{href:"https://help.sumsub.com/products/how-video-identification-works#introduction-to-video-identification",target:"_blank",rel:"noopener noreferrer"}},[t._v("help center"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("All API requests must be authenticated as described in "),s("router-link",{attrs:{to:"/api-reference/#access-tokens-for-sdks"}},[t._v("this section")]),t._v(".")],1)]),t._v(" "),s("h2",{attrs:{id:"getting-video-call-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-video-call-data"}},[t._v("#")]),t._v(" Getting video call data")]),t._v(" "),s("p",[t._v("With the method below, you'll be able to get video call results and fetch call identifier to upload video later.")]),t._v(" "),s("p",[s("strong",[t._v("GET")]),t._v(" "),s("code",[t._v("/resources/inspections/{inspectionId}?fields=videoIdentData")])]),t._v(" "),s("h5",{attrs:{id:"request-arguments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-arguments"}},[t._v("#")]),t._v(" REQUEST ARGUMENTS")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("inspectionId")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Yes")]),t._v(" "),s("td",[t._v("Inspection ID")])])])]),t._v(" "),s("h5",{attrs:{id:"example-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-request"}},[t._v("#")]),t._v(" Example request")]),t._v(" "),s("CodeBlock",[s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X GET "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.sumsub.com/resources/inspections/5e9412223cc1813b4db0b0e4?fields=videoIdentData'")]),t._v("\n")])])])]),t._v(" "),s("h5",{attrs:{id:"response-attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-attributes"}},[t._v("#")]),t._v(" RESPONSE ATTRIBUTES")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Optional")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("No")]),t._v(" "),s("td",[t._v("Inspection ID")])]),t._v(" "),s("tr",[s("td",[t._v("videoIdentData")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("Yes")]),t._v(" "),s("td",[t._v("Object representing data about video calls")])])])]),t._v(" "),s("h5",{attrs:{id:"videoidentdata-attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#videoidentdata-attributes"}},[t._v("#")]),t._v(" "),s("code",[t._v("videoIdentData")]),t._v(" ATTRIBUTES")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Optional")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("reviewStatus")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("No")]),t._v(" "),s("td",[t._v("Current status of Video Ident step. Options for reviewStatus can be found "),s("a",{attrs:{href:"https://developers.sumsub.com/api-reference/#response-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("tr",[s("td",[t._v("moderatorDisplayName")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Yes")]),t._v(" "),s("td",[t._v("Video Call operator name.")])]),t._v(" "),s("tr",[s("td",[t._v("compositions")]),t._v(" "),s("td",[t._v("Array of objects")]),t._v(" "),s("td",[t._v("Yes")]),t._v(" "),s("td",[t._v("Data about each video call.")])])])]),t._v(" "),s("h5",{attrs:{id:"compositions-elements-attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compositions-elements-attributes"}},[t._v("#")]),t._v(" "),s("code",[t._v("compositions")]),t._v(" ELEMENTS ATTRIBUTES")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Optional")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("compositionCreatedAt")]),t._v(" "),s("td",[t._v("Date")]),t._v(" "),s("td",[t._v("No")]),t._v(" "),s("td",[t._v("Date and time of video call start.")])]),t._v(" "),s("tr",[s("td",[t._v("compositionDuration")]),t._v(" "),s("td",[t._v("Integer")]),t._v(" "),s("td",[t._v("Yes")]),t._v(" "),s("td",[t._v("Video call duration in seconds.")])]),t._v(" "),s("tr",[s("td",[t._v("compositionMediaId")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Yes")]),t._v(" "),s("td",[t._v("Video Call record identifier.")])])])]),t._v(" "),s("h5",{attrs:{id:"example-response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-response"}},[t._v("#")]),t._v(" Example response")]),t._v(" "),s("CodeBlock",[s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5e9412223cc1813b4db0b0e4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"videoIdentData"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reviewStatus"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"completed"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"moderatorDisplayName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bradley Peak"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compositions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compositionCreatedAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2022-07-26 09:02:53"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compositionDuration"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1868")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compositionMediaId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"62dfae546cef4a0001079b37"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compositionCreatedAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2022-07-27 07:53:31"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compositionDuration"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1868")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compositionMediaId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"62e0ef8d7ff76f000176aeb1"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compositionCreatedAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2022-07-29 07:21:19"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compositionDuration"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("540")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compositionMediaId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"62e38aa5fd6916000172dc23"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("h2",{attrs:{id:"getting-video-call-media-video"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-video-call-media-video"}},[t._v("#")]),t._v(" Getting video call media (video)")]),t._v(" "),s("p",[s("strong",[t._v("GET")]),t._v(" "),s("code",[t._v("/resources/videoIdent/applicant/{applicantId}/media/{compositionMediaId}")])]),t._v(" "),s("h5",{attrs:{id:"request-arguments-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-arguments-2"}},[t._v("#")]),t._v(" REQUEST ARGUMENTS")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Optional")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("applicantId")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("No")]),t._v(" "),s("td",[t._v("Applicant ID")])]),t._v(" "),s("tr",[s("td",[t._v("compositionMediaId")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("No")]),t._v(" "),s("td",[t._v("Video call media identifier")])])])]),t._v(" "),s("h5",{attrs:{id:"example-request-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-request-2"}},[t._v("#")]),t._v(" Example request")]),t._v(" "),s("CodeBlock",[s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X GET "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.sumsub.com/resources/videoIdent/applicant/5e9412223cc1813b4db0b0e3/media/{compositionMediaId}'")]),t._v("\n")])])])]),t._v(" "),s("h5",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" RESPONSE")]),t._v(" "),s("p",[t._v("Binary content representing a video call recording. The "),s("code",[t._v("Content-Type")]),t._v(" response header precisely describes the response mime-type. The full list of mime-types and file formats you can find "),s("router-link",{attrs:{to:"/faq/#what-file-extensions-do-you-accept-are-there-file-size-limits"}},[t._v("here")]),t._v(".")],1)],1)}),[],!1,null,null,null);e.default=r.exports}}]);