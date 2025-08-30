import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './core/token.interceptor';
 
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([tokenInterceptor]))
  ]
};
 

// import { ApplicationConfig, importProvidersFrom } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule, provideHttpClient } from '@angular/common/http';
// import { routes } from './app.routes';
 
// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes),
//     importProvidersFrom(FormsModule),
//     provideHttpClient(),     // ✅ for ngModel, forms
//     importProvidersFrom(HttpClientModule)  // ✅ for API calls
//   ]
// };
 

// import { ApplicationConfig, importProvidersFrom } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { routes } from './app.routes';
 
// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes),
//     importProvidersFrom(FormsModule),
//     importProvidersFrom(HttpClientModule)
//   ]
// };
 