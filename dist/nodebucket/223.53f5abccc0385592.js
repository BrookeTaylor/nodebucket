"use strict";(self.webpackChunknodebucket=self.webpackChunknodebucket||[]).push([[223],{6223:(gn,_t,v)=>{v.d(_t,{Fj:()=>F,JJ:()=>xe,JL:()=>Pe,UX:()=>_n,_:()=>X,_Y:()=>Je,kI:()=>At,qu:()=>fn,sg:()=>H,u:()=>re,u5:()=>pn});var s=v(8926),le=v(6814),gt=v(7715),mt=v(9315),yt=v(7398);let ue=(()=>{var n;class e{constructor(t,i){this._renderer=t,this._elementRef=i,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}}return(n=e).\u0275fac=function(t){return new(t||n)(s.Y36(s.Qsj),s.Y36(s.SBq))},n.\u0275dir=s.lG2({type:n}),e})(),g=(()=>{var n;class e extends ue{}return(n=e).\u0275fac=function(){let r;return function(i){return(r||(r=s.n5z(n)))(i||n)}}(),n.\u0275dir=s.lG2({type:n,features:[s.qOj]}),e})();const d=new s.OlP("NgValueAccessor"),Ct={provide:d,useExisting:(0,s.Gpc)(()=>F),multi:!0},Dt=new s.OlP("CompositionEventMode");let F=(()=>{var n;class e extends ue{constructor(t,i,o){super(t,i),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Vt(){const n=(0,le.q)()?(0,le.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return(n=e).\u0275fac=function(t){return new(t||n)(s.Y36(s.Qsj),s.Y36(s.SBq),s.Y36(Dt,8))},n.\u0275dir=s.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,i){1&t&&s.NdJ("input",function(a){return i._handleInput(a.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(a){return i._compositionEnd(a.target.value)})},features:[s._Bn([Ct]),s.qOj]}),e})();function f(n){return null==n||("string"==typeof n||Array.isArray(n))&&0===n.length}function de(n){return null!=n&&"number"==typeof n.length}const l=new s.OlP("NgValidators"),p=new s.OlP("NgAsyncValidators"),Mt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class At{static min(e){return function he(n){return e=>{if(f(e.value)||f(n))return null;const r=parseFloat(e.value);return!isNaN(r)&&r<n?{min:{min:n,actual:e.value}}:null}}(e)}static max(e){return function fe(n){return e=>{if(f(e.value)||f(n))return null;const r=parseFloat(e.value);return!isNaN(r)&&r>n?{max:{max:n,actual:e.value}}:null}}(e)}static required(e){return function pe(n){return f(n.value)?{required:!0}:null}(e)}static requiredTrue(e){return function _e(n){return!0===n.value?null:{required:!0}}(e)}static email(e){return function ge(n){return f(n.value)||Mt.test(n.value)?null:{email:!0}}(e)}static minLength(e){return function me(n){return e=>f(e.value)||!de(e.value)?null:e.value.length<n?{minlength:{requiredLength:n,actualLength:e.value.length}}:null}(e)}static maxLength(e){return function ye(n){return e=>de(e.value)&&e.value.length>n?{maxlength:{requiredLength:n,actualLength:e.value.length}}:null}(e)}static pattern(e){return function ve(n){if(!n)return O;let e,r;return"string"==typeof n?(r="","^"!==n.charAt(0)&&(r+="^"),r+=n,"$"!==n.charAt(n.length-1)&&(r+="$"),e=new RegExp(r)):(r=n.toString(),e=n),t=>{if(f(t.value))return null;const i=t.value;return e.test(i)?null:{pattern:{requiredPattern:r,actualValue:i}}}}(e)}static nullValidator(e){return null}static compose(e){return be(e)}static composeAsync(e){return Ee(e)}}function O(n){return null}function Ce(n){return null!=n}function Ve(n){return(0,s.QGY)(n)?(0,gt.D)(n):n}function De(n){let e={};return n.forEach(r=>{e=null!=r?{...e,...r}:e}),0===Object.keys(e).length?null:e}function Me(n,e){return e.map(r=>r(n))}function Ae(n){return n.map(e=>function bt(n){return!n.validate}(e)?e:r=>e.validate(r))}function be(n){if(!n)return null;const e=n.filter(Ce);return 0==e.length?null:function(r){return De(Me(r,e))}}function R(n){return null!=n?be(Ae(n)):null}function Ee(n){if(!n)return null;const e=n.filter(Ce);return 0==e.length?null:function(r){const t=Me(r,e).map(Ve);return(0,mt.D)(t).pipe((0,yt.U)(De))}}function j(n){return null!=n?Ee(Ae(n)):null}function we(n,e){return null===n?[e]:Array.isArray(n)?[...n,e]:[n,e]}function Fe(n){return n._rawValidators}function Oe(n){return n._rawAsyncValidators}function L(n){return n?Array.isArray(n)?n:[n]:[]}function S(n,e){return Array.isArray(n)?n.includes(e):n===e}function Se(n,e){const r=L(e);return L(n).forEach(i=>{S(r,i)||r.push(i)}),r}function Ne(n,e){return L(e).filter(r=>!S(n,r))}class Ge{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=R(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=j(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,r){return!!this.control&&this.control.hasError(e,r)}getError(e,r){return this.control?this.control.getError(e,r):null}}class u extends Ge{get formDirective(){return null}get path(){return null}}class _ extends Ge{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Be{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let xe=(()=>{var n;class e extends Be{constructor(t){super(t)}}return(n=e).\u0275fac=function(t){return new(t||n)(s.Y36(_,2))},n.\u0275dir=s.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,i){2&t&&s.ekj("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},features:[s.qOj]}),e})(),Pe=(()=>{var n;class e extends Be{constructor(t){super(t)}}return(n=e).\u0275fac=function(t){return new(t||n)(s.Y36(u,10))},n.\u0275dir=s.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,i){2&t&&s.ekj("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},features:[s.qOj]}),e})();const V="VALID",G="INVALID",C="PENDING",D="DISABLED";function W(n){return(B(n)?n.validators:n)||null}function $(n,e){return(B(e)?e.asyncValidators:n)||null}function B(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}function ke(n,e,r){const t=n.controls;if(!(e?Object.keys(t):t).length)throw new s.vHH(1e3,"");if(!t[r])throw new s.vHH(1001,"")}function Te(n,e,r){n._forEachChild((t,i)=>{if(void 0===r[i])throw new s.vHH(1002,"")})}class x{constructor(e,r){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(r)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===V}get invalid(){return this.status===G}get pending(){return this.status==C}get disabled(){return this.status===D}get enabled(){return this.status!==D}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Se(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Se(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ne(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ne(e,this._rawAsyncValidators))}hasValidator(e){return S(this._rawValidators,e)}hasAsyncValidator(e){return S(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(r=>{r.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=C,!1!==e.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){const r=this._parentMarkedDirty(e.onlySelf);this.status=D,this.errors=null,this._forEachChild(t=>{t.disable({...e,onlySelf:!0})}),this._updateValue(),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...e,skipPristineCheck:r}),this._onDisabledChange.forEach(t=>t(!0))}enable(e={}){const r=this._parentMarkedDirty(e.onlySelf);this.status=V,this._forEachChild(t=>{t.enable({...e,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors({...e,skipPristineCheck:r}),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===V||this.status===C)&&this._runAsyncValidator(e.emitEvent)),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(r=>r._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?D:V}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;const r=Ve(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(t=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(t,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,r={}){this.errors=e,this._updateControlsErrors(!1!==r.emitEvent)}get(e){let r=e;return null==r||(Array.isArray(r)||(r=r.split(".")),0===r.length)?null:r.reduce((t,i)=>t&&t._find(i),this)}getError(e,r){const t=r?this.get(r):this;return t&&t.errors?t.errors[e]:null}hasError(e,r){return!!this.getError(e,r)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new s.vpe,this.statusChanges=new s.vpe}_calculateStatus(){return this._allControlsDisabled()?D:this.errors?G:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(G)?G:V}_anyControlsHaveStatus(e){return this._anyControls(r=>r.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){B(e)&&null!=e.updateOn&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=function Ot(n){return Array.isArray(n)?R(n):n||null}(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=function St(n){return Array.isArray(n)?j(n):n||null}(this._rawAsyncValidators)}}class M extends x{constructor(e,r,t){super(W(r),$(t,r)),this.controls=e,this._initObservables(),this._setUpdateStrategy(r),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,r){return this.controls[e]?this.controls[e]:(this.controls[e]=r,r.setParent(this),r._registerOnCollectionChange(this._onCollectionChange),r)}addControl(e,r,t={}){this.registerControl(e,r),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}setControl(e,r,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],r&&this.registerControl(e,r),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,r={}){Te(this,0,e),Object.keys(e).forEach(t=>{ke(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r)}patchValue(e,r={}){null!=e&&(Object.keys(e).forEach(t=>{const i=this.controls[t];i&&i.patchValue(e[t],{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r))}reset(e={},r={}){this._forEachChild((t,i)=>{t.reset(e[i],{onlySelf:!0,emitEvent:r.emitEvent})}),this._updatePristine(r),this._updateTouched(r),this.updateValueAndValidity(r)}getRawValue(){return this._reduceChildren({},(e,r,t)=>(e[t]=r.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(r,t)=>!!t._syncPendingControls()||r);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(r=>{const t=this.controls[r];t&&e(t,r)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(const[r,t]of Object.entries(this.controls))if(this.contains(r)&&e(t))return!0;return!1}_reduceValue(){return this._reduceChildren({},(r,t,i)=>((t.enabled||this.disabled)&&(r[i]=t.value),r))}_reduceChildren(e,r){let t=e;return this._forEachChild((i,o)=>{t=r(t,i,o)}),t}_allControlsDisabled(){for(const e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}}class He extends M{}const m=new s.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>A}),A="always";function b(n,e,r=A){z(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||"always"===r)&&e.valueAccessor.setDisabledState?.(n.disabled),function Gt(n,e){e.valueAccessor.registerOnChange(r=>{n._pendingValue=r,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Ue(n,e)})}(n,e),function xt(n,e){const r=(t,i)=>{e.valueAccessor.writeValue(t),i&&e.viewToModelUpdate(t)};n.registerOnChange(r),e._registerOnDestroy(()=>{n._unregisterOnChange(r)})}(n,e),function Bt(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Ue(n,e),"submit"!==n.updateOn&&n.markAsTouched()})}(n,e),function Nt(n,e){if(e.valueAccessor.setDisabledState){const r=t=>{e.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(r),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(r)})}}(n,e)}function I(n,e,r=!0){const t=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(t),e.valueAccessor.registerOnTouched(t)),T(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function k(n,e){n.forEach(r=>{r.registerOnValidatorChange&&r.registerOnValidatorChange(e)})}function z(n,e){const r=Fe(n);null!==e.validator?n.setValidators(we(r,e.validator)):"function"==typeof r&&n.setValidators([r]);const t=Oe(n);null!==e.asyncValidator?n.setAsyncValidators(we(t,e.asyncValidator)):"function"==typeof t&&n.setAsyncValidators([t]);const i=()=>n.updateValueAndValidity();k(e._rawValidators,i),k(e._rawAsyncValidators,i)}function T(n,e){let r=!1;if(null!==n){if(null!==e.validator){const i=Fe(n);if(Array.isArray(i)&&i.length>0){const o=i.filter(a=>a!==e.validator);o.length!==i.length&&(r=!0,n.setValidators(o))}}if(null!==e.asyncValidator){const i=Oe(n);if(Array.isArray(i)&&i.length>0){const o=i.filter(a=>a!==e.asyncValidator);o.length!==i.length&&(r=!0,n.setAsyncValidators(o))}}}const t=()=>{};return k(e._rawValidators,t),k(e._rawAsyncValidators,t),r}function Ue(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Le(n,e){const r=n.indexOf(e);r>-1&&n.splice(r,1)}function qe(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const w=class extends x{constructor(e=null,r,t){super(W(r),$(t,r)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(r),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),B(r)&&(r.nonNullable||r.initialValueIsDefault)&&(this.defaultValue=qe(e)?e.value:e)}setValue(e,r={}){this.value=this._pendingValue=e,this._onChange.length&&!1!==r.emitModelToViewChange&&this._onChange.forEach(t=>t(this.value,!1!==r.emitViewToModelChange)),this.updateValueAndValidity(r)}patchValue(e,r={}){this.setValue(e,r)}reset(e=this.defaultValue,r={}){this._applyFormState(e),this.markAsPristine(r),this.markAsUntouched(r),this.setValue(this.value,r),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Le(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Le(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(e){qe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};let Je=(()=>{var n;class e{}return(n=e).\u0275fac=function(t){return new(t||n)},n.\u0275dir=s.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),e})();const qt={provide:d,useExisting:(0,s.Gpc)(()=>X),multi:!0};let Qe=(()=>{var n;class e{}return(n=e).\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({}),e})(),Yt=(()=>{var n;class e{constructor(){this._accessors=[]}add(t,i){this._accessors.push([t,i])}remove(t){for(let i=this._accessors.length-1;i>=0;--i)if(this._accessors[i][1]===t)return void this._accessors.splice(i,1)}select(t){this._accessors.forEach(i=>{this._isSameGroup(i,t)&&i[1]!==t&&i[1].fireUncheck(t.value)})}_isSameGroup(t,i){return!!t[0].control&&t[0]._parent===i._control._parent&&t[1].name===i.name}}return(n=e).\u0275fac=function(t){return new(t||n)},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac,providedIn:Qe}),e})(),X=(()=>{var n;class e extends g{constructor(t,i,o,a){super(t,i),this._registry=o,this._injector=a,this.setDisabledStateFired=!1,this.onChange=()=>{},this.callSetDisabledState=(0,s.f3M)(m,{optional:!0})??A}ngOnInit(){this._control=this._injector.get(_),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(t){this._state=t===this.value,this.setProperty("checked",this._state)}registerOnChange(t){this._fn=t,this.onChange=()=>{t(this.value),this._registry.select(this)}}setDisabledState(t){(this.setDisabledStateFired||t||"whenDisabledForLegacyCode"===this.callSetDisabledState)&&this.setProperty("disabled",t),this.setDisabledStateFired=!0}fireUncheck(t){this.writeValue(t)}_checkName(){!this.name&&this.formControlName&&(this.name=this.formControlName)}}return(n=e).\u0275fac=function(t){return new(t||n)(s.Y36(s.Qsj),s.Y36(s.SBq),s.Y36(Yt),s.Y36(s.zs3))},n.\u0275dir=s.lG2({type:n,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(t,i){1&t&&s.NdJ("change",function(){return i.onChange()})("blur",function(){return i.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},features:[s._Bn([qt]),s.qOj]}),e})();const ee=new s.OlP("NgModelWithFormControlWarning"),zt={provide:u,useExisting:(0,s.Gpc)(()=>H)};let H=(()=>{var n;class e extends u{constructor(t,i,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new s.vpe,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(T(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const i=this.form.get(t.path);return b(i,t,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){I(t.control||null,t,!1),function Tt(n,e){const r=n.indexOf(e);r>-1&&n.splice(r,1)}(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,i){this.form.get(t.path).setValue(i)}onSubmit(t){return this.submitted=!0,function je(n,e){n._syncPendingControls(),e.forEach(r=>{const t=r.control;"submit"===t.updateOn&&t._pendingChange&&(r.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(t),"dialog"===t?.target?.method}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const i=t.control,o=this.form.get(t.path);i!==o&&(I(i||null,t),(n=>n instanceof w)(o)&&(b(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const i=this.form.get(t.path);(function Re(n,e){z(n,e)})(i,t),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const i=this.form.get(t.path);i&&function Pt(n,e){return T(n,e)}(i,t)&&i.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){z(this.form,this),this._oldForm&&T(this._oldForm,this)}_checkFormPresent(){}}return(n=e).\u0275fac=function(t){return new(t||n)(s.Y36(l,10),s.Y36(p,10),s.Y36(m,8))},n.\u0275dir=s.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,i){1&t&&s.NdJ("submit",function(a){return i.onSubmit(a)})("reset",function(){return i.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[s._Bn([zt]),s.qOj,s.TTD]}),e})();const Qt={provide:_,useExisting:(0,s.Gpc)(()=>re)};let re=(()=>{var n;class e extends _{set isDisabled(t){}constructor(t,i,o,a,c){super(),this._ngModelWarningConfig=c,this._added=!1,this.name=null,this.update=new s.vpe,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=function Q(n,e){if(!e)return null;let r,t,i;return Array.isArray(e),e.forEach(o=>{o.constructor===F?r=o:function kt(n){return Object.getPrototypeOf(n.constructor)===g}(o)?t=o:i=o}),i||t||r||null}(0,a)}ngOnChanges(t){this._added||this._setUpControl(),function K(n,e){if(!n.hasOwnProperty("model"))return!1;const r=n.model;return!!r.isFirstChange()||!Object.is(e,r.currentValue)}(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return function P(n,e){return[...e.path,n]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}}return(n=e)._ngModelWarningSentOnce=!1,n.\u0275fac=function(t){return new(t||n)(s.Y36(u,13),s.Y36(l,10),s.Y36(p,10),s.Y36(d,10),s.Y36(ee,8))},n.\u0275dir=s.lG2({type:n,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[s._Bn([Qt]),s.qOj,s.TTD]}),e})(),ht=(()=>{var n;class e{}return(n=e).\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[Qe]}),e})();class ft extends x{constructor(e,r,t){super(W(r),$(t,r)),this.controls=e,this._initObservables(),this._setUpdateStrategy(r),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,r={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}insert(e,r,t={}){this.controls.splice(e,0,r),this._registerControl(r),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(e,r={}){let t=this._adjustIndex(e);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:r.emitEvent})}setControl(e,r,t={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),r&&(this.controls.splice(i,0,r),this._registerControl(r)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,r={}){Te(this,0,e),e.forEach((t,i)=>{ke(this,!1,i),this.at(i).setValue(t,{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r)}patchValue(e,r={}){null!=e&&(e.forEach((t,i)=>{this.at(i)&&this.at(i).patchValue(t,{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r))}reset(e=[],r={}){this._forEachChild((t,i)=>{t.reset(e[i],{onlySelf:!0,emitEvent:r.emitEvent})}),this._updatePristine(r),this._updateTouched(r),this.updateValueAndValidity(r)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(r=>r._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((r,t)=>!!t._syncPendingControls()||r,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((r,t)=>{e(r,t)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(r=>r.enabled&&e(r))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(const e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}}function pt(n){return!!n&&(void 0!==n.asyncValidators||void 0!==n.validators||void 0!==n.updateOn)}let fn=(()=>{var n;class e{constructor(){this.useNonNullable=!1}get nonNullable(){const t=new e;return t.useNonNullable=!0,t}group(t,i=null){const o=this._reduceControls(t);let a={};return pt(i)?a=i:null!==i&&(a.validators=i.validator,a.asyncValidators=i.asyncValidator),new M(o,a)}record(t,i=null){const o=this._reduceControls(t);return new He(o,i)}control(t,i,o){let a={};return this.useNonNullable?(pt(i)?a=i:(a.validators=i,a.asyncValidators=o),new w(t,{...a,nonNullable:!0})):new w(t,i,o)}array(t,i,o){const a=t.map(c=>this._createControl(c));return new ft(a,i,o)}_reduceControls(t){const i={};return Object.keys(t).forEach(o=>{i[o]=this._createControl(t[o])}),i}_createControl(t){return t instanceof w||t instanceof x?t:Array.isArray(t)?this.control(t[0],t.length>1?t[1]:null,t.length>2?t[2]:null):this.control(t)}}return(n=e).\u0275fac=function(t){return new(t||n)},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),e})(),pn=(()=>{var n;class e{static withConfig(t){return{ngModule:e,providers:[{provide:m,useValue:t.callSetDisabledState??A}]}}}return(n=e).\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[ht]}),e})(),_n=(()=>{var n;class e{static withConfig(t){return{ngModule:e,providers:[{provide:ee,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:m,useValue:t.callSetDisabledState??A}]}}}return(n=e).\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[ht]}),e})()}}]);