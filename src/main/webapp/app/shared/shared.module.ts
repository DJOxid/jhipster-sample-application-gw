import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  JhipsterSampleApplicationGwSharedLibsModule,
  JhipsterSampleApplicationGwSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [JhipsterSampleApplicationGwSharedLibsModule, JhipsterSampleApplicationGwSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhipsterSampleApplicationGwSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationGwSharedModule {
  static forRoot() {
    return {
      ngModule: JhipsterSampleApplicationGwSharedModule
    };
  }
}
