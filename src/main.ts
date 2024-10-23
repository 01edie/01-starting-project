import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent).catch((err) => console.log(err));
platformBrowserDynamic().bootstrapModule(AppModule);
