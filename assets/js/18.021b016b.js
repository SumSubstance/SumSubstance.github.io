(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{251:function(t,e,r){"use strict";r.r(e);var a=r(16),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"e-kyc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#e-kyc"}},[t._v("#")]),t._v(" e-KYC")]),t._v(" "),r("p",[t._v("Here, you can add the "),r("code",[t._v("e-KYC")]),t._v(" verification step to your applicant level to pass Non-doc Verification without uploading docs and also\nretrieve applicant data from the official\nsources.")]),t._v(" "),r("h2",{attrs:{id:"e-kyc-api-reference"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#e-kyc-api-reference"}},[t._v("#")]),t._v(" e-KYC API Reference")]),t._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",[t._v("All API requests must be authenticated as described in "),r("router-link",{attrs:{to:"/api-reference/#app-tokens"}},[t._v("this section")]),t._v(".")],1)]),t._v(" "),r("h3",{attrs:{id:"submit-applicant-data"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#submit-applicant-data"}},[t._v("#")]),t._v(" Submit applicant data")]),t._v(" "),r("p",[r("strong",[t._v("POST")]),t._v(" "),r("code",[t._v("/resources/applicants/{applicantId}/ekyc/submit")])]),t._v(" "),r("h5",{attrs:{id:"request-arguments"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#request-arguments"}},[t._v("#")]),t._v(" REQUEST ARGUMENTS")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Required")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("applicantId")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("Yes")]),t._v(" "),r("td",[t._v("Applicant ID.")])]),t._v(" "),r("tr",[r("td",[t._v("#{body}")]),t._v(" "),r("td",[t._v("Object")]),t._v(" "),r("td",[t._v("Yes")]),t._v(" "),r("td",[t._v("An object representing applicant (see supported sources).")])])])]),t._v(" "),r("h5",{attrs:{id:"request-body"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" REQUEST BODY")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Required")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("info")]),t._v(" "),r("td",[t._v("Object")]),t._v(" "),r("td",[t._v("Yes")]),t._v(" "),r("td",[t._v("Applicant info.")])])])]),t._v(" "),r("h5",{attrs:{id:"info-element-attributes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#info-element-attributes"}},[t._v("#")]),t._v(" "),r("code",[t._v("info")]),t._v(" ELEMENT ATTRIBUTES")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Required")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("country")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("Yes")]),t._v(" "),r("td",[t._v("Alpha-3 country code.")])]),t._v(" "),r("tr",[r("td",[t._v("tin")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("Yes")]),t._v(" "),r("td",[t._v("Tax Identifier Number")])])])]),t._v(" "),r("h5",{attrs:{id:"example-request"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-request"}},[t._v("#")]),t._v(" Example request")]),t._v(" "),r("CodeBlock",[r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X POST "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.sumsub.com/resources/applicants/631f268442d8290001e1eee9/ekyc/submit'")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -d "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n        "info": {\n            "country": "IND",\n            "tin": "999999990019",\n        }\n    }\'')]),t._v("\n")])])])]),t._v(" "),r("h5",{attrs:{id:"response-attributes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#response-attributes"}},[t._v("#")]),t._v(" RESPONSE ATTRIBUTES")]),t._v(" "),r("p",[t._v("Response contains the status of the submission depends on the provider")]),t._v(" "),r("h4",{attrs:{id:"response-attributes-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#response-attributes-2"}},[t._v("#")]),t._v(" RESPONSE ATTRIBUTES")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Optional")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("status")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("No")]),t._v(" "),r("td",[t._v("Status of the e-KYC flow.")])]),t._v(" "),r("tr",[r("td",[t._v("confirmationType")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("Yes")]),t._v(" "),r("td",[t._v("Confirmation type.")])]),t._v(" "),r("tr",[r("td",[t._v("confirmationId")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("Yes")]),t._v(" "),r("td",[t._v("Confirmation ID.")])]),t._v(" "),r("tr",[r("td",[t._v("confirmationStatus")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("Yes")]),t._v(" "),r("td",[t._v("Status of the confirmation flow.")])]),t._v(" "),r("tr",[r("td",[t._v("otpConfirmation")]),t._v(" "),r("td",[t._v("Object")]),t._v(" "),r("td",[t._v("Yes")]),t._v(" "),r("td",[t._v("Details for OTP confirmation if "),r("code",[t._v("confirmationType")]),t._v(" is "),r("code",[t._v("otp")]),t._v(".")])])])]),t._v(" "),r("h5",{attrs:{id:"status-values"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#status-values"}},[t._v("#")]),t._v(" "),r("code",[t._v("status")]),t._v(" values")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Value")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("completed")]),t._v(" "),r("td",[t._v("Submission is completed.")])]),t._v(" "),r("tr",[r("td",[t._v("skipped")]),t._v(" "),r("td",[t._v("Object representing transaction review result.")])]),t._v(" "),r("tr",[r("td",[t._v("confirmationRequired")]),t._v(" "),r("td",[t._v("Submission needs approval. See "),r("code",[t._v("confirmationType")]),t._v(".")])]),t._v(" "),r("tr",[r("td",[t._v("rejected")]),t._v(" "),r("td",[t._v("Submission was rejected.")])])])]),t._v(" "),r("p",[t._v("Access to applicant's data from some providers need to be confirmed by applicant. In that case "),r("code",[t._v("status")]),t._v(" will be set\nto "),r("code",[t._v("confirmationRequired")]),t._v(" and "),r("code",[t._v("confirmationStatus")]),t._v(" to "),r("code",[t._v("created")]),t._v(".\nConfirmation type will be provided in "),r("code",[t._v("confirmationType")]),t._v(" field.\nHow to confirm submission see "),r("router-link",{attrs:{to:"/api-reference/ekyc.html#confirm-applicant-data"}},[t._v("below")])],1),t._v(" "),r("p",[t._v("E.g. For an Indian aadhaar, applicant receives the SMS with OTP code on the phone number that is linked to that aadhaar. Then the applicant provides the code to confirm access.")]),t._v(" "),r("h5",{attrs:{id:"confirmationtype-values"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#confirmationtype-values"}},[t._v("#")]),t._v(" "),r("code",[t._v("confirmationType")]),t._v(" values")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Value")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("otp")]),t._v(" "),r("td",[t._v("Submission should be confirmed via OTP code.")])]),t._v(" "),r("tr",[r("td",[t._v("oAuth")]),t._v(" "),r("td",[t._v("Applicant should be directed to external service to proceed submission.")])])])]),t._v(" "),r("h5",{attrs:{id:"otpconfirmation-element-attributes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#otpconfirmation-element-attributes"}},[t._v("#")]),t._v(" "),r("code",[t._v("otpConfirmation")]),t._v(" ELEMENT ATTRIBUTES")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("codeLength")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("OTP code length")])])])]),t._v(" "),r("h5",{attrs:{id:"oauthconfirmation-element-attributes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#oauthconfirmation-element-attributes"}},[t._v("#")]),t._v(" "),r("code",[t._v("oAuthConfirmation")]),t._v(" ELEMENT ATTRIBUTES")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("url")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("External auth URL where applicant should be directed to pass authentication.")])]),t._v(" "),r("tr",[r("td",[t._v("redirectUrl")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("Final URL address where auth page will be redirected after applicant finish the journey.")])])])]),t._v(" "),r("p",[t._v("Applicant should be redirected to the "),r("code",[t._v("url")]),t._v(" where they can authenticate the external source.\nAt the end of the auth journey, applicant will be redirected to the "),r("code",[t._v("completeUrl")]),t._v(" consisting of "),r("code",[t._v("redirectUrl")]),t._v(" enriched with\nqueryParams with the auth result."),r("br")]),t._v(" "),r("p",[t._v("Several redirects could be performed during the auth flow. To detect the completion of the journey track, redirect to\nthe "),r("code",[t._v("redirectUrl")]),t._v(". "),r("br"),t._v("\nTo complete ekyc oAuth flow, pass final full url as "),r("code",[t._v("completeUrl")]),t._v(" to the [confirm request] (\n/api-reference/ekyc.html#confirm-applicant-data)")]),t._v(" "),r("h5",{attrs:{id:"example-response"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-response"}},[t._v("#")]),t._v(" Example response")]),t._v(" "),r("CodeBlock",[r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//no confirmationType")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"completed"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//confirmationType: otp")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"confirmationRequired"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"confirmationId"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bzaPxnCpyxEqs0sJKASXxZIk"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"confirmationStatus"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"created"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"confirmationType"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"otp"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"otpConfirmation"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"codeLength"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//confirmationType: oAuth")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ...\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"confirmationType"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oAuth"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"oauthConfirmation"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://ext.auth.service.com/oidc/authorize?param1=value1&param2=value2"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"redirectUrl"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://in.sumsub.com/idensic/ekyc/redirect"')]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),r("h3",{attrs:{id:"confirm-applicant-data"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#confirm-applicant-data"}},[t._v("#")]),t._v(" Confirm applicant data")]),t._v(" "),r("p",[r("strong",[t._v("POST")]),t._v(" "),r("code",[t._v("/resources/applicants/{applicantId}/ekyc/confirm/{confirmationid}")])]),t._v(" "),r("h5",{attrs:{id:"request-arguments-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#request-arguments-2"}},[t._v("#")]),t._v(" REQUEST ARGUMENTS")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Required")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("applicantId")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("Yes")]),t._v(" "),r("td",[t._v("Applicant ID.")])]),t._v(" "),r("tr",[r("td",[t._v("confirmationId")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("Yes")]),t._v(" "),r("td",[r("code",[t._v("confirmationId")]),t._v(" from submission response.")])]),t._v(" "),r("tr",[r("td",[t._v("#{body}")]),t._v(" "),r("td",[t._v("Object")]),t._v(" "),r("td",[t._v("Yes")]),t._v(" "),r("td",[t._v("An object representing confirmation data (see example).")])])])]),t._v(" "),r("h5",{attrs:{id:"request-body-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#request-body-2"}},[t._v("#")]),t._v(" REQUEST BODY")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Required")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("otp")]),t._v(" "),r("td",[t._v("Object")]),t._v(" "),r("td",[t._v("No")]),t._v(" "),r("td",[t._v("OTP confirmation data if "),r("code",[t._v("confirmationType")]),t._v(" is "),r("code",[t._v("otp")]),t._v(".")])]),t._v(" "),r("tr",[r("td",[t._v("oauth")]),t._v(" "),r("td",[t._v("Object")]),t._v(" "),r("td",[t._v("No")]),t._v(" "),r("td",[t._v("oAuth confirmation data if "),r("code",[t._v("confirmationType")]),t._v(" is "),r("code",[t._v("oAuth")]),t._v(".")])])])]),t._v(" "),r("h5",{attrs:{id:"otp-element-attributes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#otp-element-attributes"}},[t._v("#")]),t._v(" "),r("code",[t._v("otp")]),t._v(" ELEMENT ATTRIBUTES")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Required")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("code")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("Yes")]),t._v(" "),r("td",[t._v("OTP that was sent to applicant.")])])])]),t._v(" "),r("h5",{attrs:{id:"example-request-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-request-2"}},[t._v("#")]),t._v(" Example request")]),t._v(" "),r("CodeBlock",[r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X POST "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.sumsub.com/resources/applicants/631f268442d8290001e1eee9/ekyc/confirm/bzaPxnCpyxEqs0sJKASXxZIk'")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -d "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n        "otp": {\n            "code": "123456",\n        }\n    }\'')]),t._v("\n")])])])]),t._v(" "),r("h5",{attrs:{id:"oauth-element-attributes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#oauth-element-attributes"}},[t._v("#")]),t._v(" "),r("code",[t._v("oauth")]),t._v(" ELEMENT ATTRIBUTES")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("completeUrl")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("Final redirected URL of the auth journey with query params. Format: redirectUrl?<queryParams>.")])])])]),t._v(" "),r("h5",{attrs:{id:"example-request-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-request-3"}},[t._v("#")]),t._v(" Example request")]),t._v(" "),r("CodeBlock",[r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X POST "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.sumsub.com/resources/applicants/631f268442d8290001e1eee9/ekyc/confirm/bzaPxnCpyxEqs0sJKASXxZIk'")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -d "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n        "oauth": {\n            "completeUrl": "https://in.sumsub.com/idensic/ekyc/redirect?code=rUKrpIoRZ44ENZnz8EC6FP",\n        }\n    }\'')]),t._v("\n")])])])]),t._v(" "),r("h5",{attrs:{id:"response-attributes-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#response-attributes-3"}},[t._v("#")]),t._v(" RESPONSE ATTRIBUTES")]),t._v(" "),r("p",[t._v("Response contains the status of the confirmation")]),t._v(" "),r("h4",{attrs:{id:"response-attributes-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#response-attributes-4"}},[t._v("#")]),t._v(" RESPONSE ATTRIBUTES")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Optional")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("status")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("No")]),t._v(" "),r("td",[t._v("Status of the e-KYC flow.")])]),t._v(" "),r("tr",[r("td",[t._v("confirmationType")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("Yes")]),t._v(" "),r("td",[t._v("Confirmation type.")])]),t._v(" "),r("tr",[r("td",[t._v("confirmationId")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("Yes")]),t._v(" "),r("td",[t._v("Confirmation ID.")])]),t._v(" "),r("tr",[r("td",[t._v("confirmationStatus")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("Yes")]),t._v(" "),r("td",[t._v("Status of the confirmation flow.")])]),t._v(" "),r("tr",[r("td",[t._v("otpConfirmation")]),t._v(" "),r("td",[t._v("Object")]),t._v(" "),r("td",[t._v("Yes")]),t._v(" "),r("td",[t._v("Details for OTP confirmation if "),r("code",[t._v("confirmationType")]),t._v(" is "),r("code",[t._v("otp")]),t._v(".")])])])]),t._v(" "),r("h5",{attrs:{id:"confirmationstatus-values"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#confirmationstatus-values"}},[t._v("#")]),t._v(" "),r("code",[t._v("confirmationStatus")]),t._v(" values")]),t._v(" "),r("p",[t._v("Status of the confirmation for that "),r("code",[t._v("confirmationId")]),t._v("\nE.g For "),r("code",[t._v("otp")]),t._v(" confirmation. Right code - "),r("code",[t._v("confirmed")]),t._v(", wrong code for several times - "),r("code",[t._v("retry")]),t._v(", limit of retries was\nexceeded - "),r("code",[t._v("rejected")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Value")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("created")]),t._v(" "),r("td",[t._v("Confirmation was created.")])]),t._v(" "),r("tr",[r("td",[t._v("confirmed")]),t._v(" "),r("td",[t._v("Confirmation was confirmed.")])]),t._v(" "),r("tr",[r("td",[t._v("retry")]),t._v(" "),r("td",[t._v("Confirmation with "),r("code",[t._v("confirmationId")]),t._v(" was temporary rejected and could be retried.")])]),t._v(" "),r("tr",[r("td",[t._v("rejected")]),t._v(" "),r("td",[t._v("Confirmation with "),r("code",[t._v("confirmationId")]),t._v(" was rejected. Start from submission again or skip the e-KYC step.")])])])]),t._v(" "),r("h5",{attrs:{id:"example-response-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-response-2"}},[t._v("#")]),t._v(" Example response")]),t._v(" "),r("CodeBlock",[r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"confirmationRequired"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"confirmationType"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"otp"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"confirmationId"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bzaPxnCpyxEqs0sJKASXxZIk"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"confirmationStatus"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"retry"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"otpConfirmation"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"codeLength"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),r("h3",{attrs:{id:"error-codes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#error-codes"}},[t._v("#")]),t._v(" Error codes")]),t._v(" "),r("p",[t._v("Also. please pay attention to the failed requests. More common error descriptions can be\nfound "),r("router-link",{attrs:{to:"/api-reference/#errors"}},[t._v("here")]),t._v(".")],1),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Code")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("9100")]),t._v(" "),r("td",[t._v("Invalid data provided. Check correctness and try again.")])]),t._v(" "),r("tr",[r("td",[t._v("9101")]),t._v(" "),r("td",[t._v("You cannot be verified with this method right now.")])]),t._v(" "),r("tr",[r("td",[t._v("9102")]),t._v(" "),r("td",[t._v("The source that we rely on is not available right now.")])]),t._v(" "),r("tr",[r("td",[t._v("9103")]),t._v(" "),r("td",[t._v("The source is experiencing difficulties right now.")])]),t._v(" "),r("tr",[r("td",[t._v("9104")]),t._v(" "),r("td",[t._v("No sufficient data in the source.")])]),t._v(" "),r("tr",[r("td",[t._v("9105")]),t._v(" "),r("td",[t._v("Max number of attempts exceeded.")])]),t._v(" "),r("tr",[r("td",[t._v("9107")]),t._v(" "),r("td",[t._v("Violations of mismatches found")])])])]),t._v(" "),r("h2",{attrs:{id:"supported-countries"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supported-countries"}},[t._v("#")]),t._v(" Supported countries")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Country")]),t._v(" "),r("th",[t._v("ID type")]),t._v(" "),r("th",[t._v("Submission body")]),t._v(" "),r("th",[t._v("Applicant required actions")]),t._v(" "),r("th",[t._v("Retrieved data")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("IND")]),t._v(" "),r("td",[t._v("AADHAAR")]),t._v(" "),r("td",[r("pre",[t._v("{"),r("br"),t._v('  "idDoc": {'),r("br"),t._v('    "country": "IND", '),r("br"),t._v('    "idDocType": "ID_CARD", '),r("br"),t._v('    "number": <AADHAAR>'),r("br"),t._v("  }"),r("br"),t._v("}")])]),t._v(" "),r("td",[t._v("Confirm by OTP code "),r("br"),r("br"),t._v("Applicant receives the sms with otp code to the phone linked to the provided aadhaar and provides it to us")]),t._v(" "),r("td",[t._v("Fullname"),r("br"),t._v("DOB"),r("br"),t._v("Gender"),r("br"),t._v("Address"),r("br"),t._v("Photo")])]),t._v(" "),r("tr",[r("td",[t._v("IND")]),t._v(" "),r("td",[t._v("AADHAAR "),r("br"),t._v(" (Gov auth service. Available only from India)")]),t._v(" "),r("td",[r("pre",[t._v("{"),r("br"),t._v('  "idDoc": {'),r("br"),t._v('    "country": "IND", '),r("br"),t._v('    "idDocType": "OTHER"'),r("br"),t._v("  }"),r("br"),t._v("}")])]),t._v(" "),r("td",[t._v("External gov authentication via AADHAAR")]),t._v(" "),r("td",[t._v("Fullname"),r("br"),t._v("DOB"),r("br"),t._v("Gender"),r("br"),t._v("Address"),r("br"),t._v("Photo")])]),t._v(" "),r("tr",[r("td",[t._v("NGA")]),t._v(" "),r("td",[t._v("BVN")]),t._v(" "),r("td",[r("pre",[t._v("{"),r("br"),t._v('  "info": {'),r("br"),t._v('    "country": "NGA", '),r("br"),t._v('    "tin": <bvn>'),r("br"),t._v("  }"),r("br"),t._v("}")])]),t._v(" "),r("td",[t._v("none")]),t._v(" "),r("td",[t._v("Name"),r("br"),t._v("Surname"),r("br"),t._v("DOB"),r("br"),t._v("Gender"),r("br"),t._v("Address"),r("br"),t._v("Phone"),r("br"),t._v("Photo")])]),t._v(" "),r("tr",[r("td",[t._v("NGA")]),t._v(" "),r("td",[t._v("Virtual NIN")]),t._v(" "),r("td",[r("pre",[t._v("{"),r("br"),t._v('  "idDoc": {'),r("br"),t._v('    "country": "NGA", '),r("br"),t._v('    "idDocType": "OTHER", '),r("br"),t._v('    "number": <vNIN>'),r("br"),t._v("  }"),r("br"),t._v("}")])]),t._v(" "),r("td",[t._v("Generate Virtual NIN "),r("br"),r("br"),t._v(" Generate vNIN via "),r("strong",[t._v("USSD")]),t._v(" "),r("br"),t._v(" 1. Dial "),r("em",[r("em",[t._v("346 3")]),t._v(" Your NIN")]),t._v(" 715461#** "),r("br"),t._v(" 2. An SMS message will be sent back to you containing the Virtual NIN generated for you "),r("br"),r("br"),r("br"),t._v("Or generate vNIN through the "),r("strong",[t._v("NIMC app")]),r("br"),t._v(" 1. Download the "),r("strong",[t._v("NIMC App")]),r("br"),t._v(" 2. Click on "),r("strong",[t._v("Get Virtual NIN")]),r("br"),t._v(" 3. Select "),r("strong",[t._v("Input Enterprise short-code")]),t._v(" and type "),r("strong",[t._v("715461")]),r("br"),t._v(" 4. Click "),r("strong",[t._v("Submit")]),t._v(" and your virtual NIN will be generated")]),t._v(" "),r("td",[t._v("Name"),r("br"),t._v("Surname"),r("br"),t._v("DOB"),r("br"),t._v("Gender"),r("br"),t._v("Phone"),r("br"),t._v("Photo")])]),t._v(" "),r("tr",[r("td",[t._v("ARG")]),t._v(" "),r("td",[t._v("IDN")]),t._v(" "),r("td",[r("pre",[t._v("{"),r("br"),t._v('  "idDoc": {'),r("br"),t._v('    "country": "ARG", '),r("br"),t._v('    "idDocType": "ID_CARD", '),r("br"),t._v('    "number": <dni>,'),r("br"),t._v('    "gender": <M/F>'),r("br"),t._v("  }"),r("br"),t._v("}")])]),t._v(" "),r("td",[t._v("none")]),t._v(" "),r("td",[t._v("Name"),r("br"),t._v("Surname"),r("br"),t._v("DOB"),r("br"),t._v("Nationality"),r("br"),t._v("Address"),r("br"),t._v("DNI IssuingDate"),r("br"),t._v("DNI Expiration Date"),r("br"),t._v("Activity and TAX status"),r("br"),t._v("PEP/Sanctions status"),r("br"),t._v("Photo vs selfie check score")])]),t._v(" "),r("tr",[r("td",[t._v("BRA")]),t._v(" "),r("td",[t._v("CPF")]),t._v(" "),r("td",[r("pre",[t._v("{"),r("br"),t._v('  "info": {'),r("br"),t._v('    "country": "BRA", '),r("br"),t._v('    "tin": <cpf>'),r("br"),t._v("  }"),r("br"),t._v("}")])]),t._v(" "),r("td",[t._v("none")]),t._v(" "),r("td",[t._v("Full name"),r("br"),t._v("DOB"),r("br"),t._v("Gender"),r("br"),t._v("Address (optional)"),r("br"),t._v("Registration Status"),r("br"),t._v("Photo vs selfie check score")])]),t._v(" "),r("tr",[r("td",[t._v("IDN")]),t._v(" "),r("td",[t._v("NIK")]),t._v(" "),r("td",[r("pre",[t._v("{"),r("br"),t._v('  "info": {'),r("br"),t._v('    "country": "IDN", '),r("br"),t._v('    "tin": <nik>,'),r("br"),t._v('    "firstName": <fullname>'),r("br"),t._v("  }"),r("br"),t._v("}")])]),t._v(" "),r("td",[t._v("none")]),t._v(" "),r("td",[t._v("DOB"),r("br"),t._v("Gender"),r("br"),t._v("Address"),r("br"),t._v("Photo vs selfie check score")])]),t._v(" "),r("tr",[r("td",[t._v("NLD")]),t._v(" "),r("td",[t._v("Bank account")]),t._v(" "),r("td",[r("pre",[t._v("{"),r("br"),t._v('  "idDoc": {'),r("br"),t._v('    "country": "NLD", '),r("br"),t._v('    "idDocType": "OTHER"'),r("br"),t._v('    "firstName": <firstName>'),r("br"),t._v('    "lastName": <lastName>'),r("br"),t._v("  }"),r("br"),t._v("}")])]),t._v(" "),r("td",[t._v("External authentication via bank account")]),t._v(" "),r("td",[t._v("Name Initials"),r("br"),t._v("Surname"),r("br"),t._v("DOB"),r("br"),t._v("Gender"),r("br"),t._v("Address"),r("br"),t._v("Email"),r("br"),t._v("Phone"),r("br")])]),t._v(" "),r("tr",[r("td",[t._v("BGD")]),t._v(" "),r("td",[t._v("NID")]),t._v(" "),r("td",[r("pre",[t._v("{"),r("br"),t._v('  "idDoc": {'),r("br"),t._v('    "country": "BGD", '),r("br"),t._v('    "idDocType": "ID_CARD", '),r("br"),t._v('    "number": <nid>,'),r("br"),t._v('    "dob": '),r("dob",[r("br"),t._v("  }"),r("br"),t._v("}")])],1)]),t._v(" "),r("td",[t._v("none")]),t._v(" "),r("td",[t._v("Fullname"),r("br"),t._v("DOB"),r("br"),t._v("Photo vs selfie check score")])]),t._v(" "),r("tr",[r("td",[t._v("GHA")]),t._v(" "),r("td",[t._v("Voter ID")]),t._v(" "),r("td",[r("pre",[t._v("{"),r("br"),t._v('  "idDoc": {'),r("br"),t._v('    "country": "GHA", '),r("br"),t._v('    "idDocType": "VOTER_ID", '),r("br"),t._v('    "number": <VoterID>'),r("br"),t._v("  }"),r("br"),t._v("}")])]),t._v(" "),r("td",[t._v("none")]),t._v(" "),r("td",[t._v("Fullname"),r("br"),t._v("DOB"),r("br"),t._v("Gender"),r("br"),t._v("Photo")])]),t._v(" "),r("tr",[r("td",[t._v("UK")]),t._v(" "),r("td",[t._v("Bank account")]),t._v(" "),r("td",[r("pre",[t._v("{"),r("br"),t._v('  "idDoc": {'),r("br"),t._v('    "country": "GBR", '),r("br"),t._v('    "idDocType": "OTHER"'),r("br"),t._v("  }"),r("br"),t._v("}")])]),t._v(" "),r("td",[t._v("External authentication via bank account")]),t._v(" "),r("td",[t._v("Name"),r("br"),t._v("Surname"),r("br"),t._v("DOB"),r("br"),t._v("Address"),r("br"),t._v("Email"),r("br"),t._v("Phone"),r("br")])])])])],1)}),[],!1,null,null,null);e.default=v.exports}}]);