import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutmeComponent } from './component/aboutme/aboutme.component';
import { SocialComponent } from './component/social/social.component';
import { AuthorComponent } from './component/author/author.component';
import { EducationComponent } from './component/education/education.component';
import { SkillComponent } from './component/skill/skill.component';
import { CertificationComponent } from './component/certification/certification.component';
import { LeftNavComponent } from './apps/left-nav/left-nav.component';
import { RightNavComponent } from './apps/right-nav/right-nav.component';
import { MainComponent } from './apps/main/main.component';
import { ExperienceComponent } from './component/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ContactComponent,
    AboutmeComponent,
    SocialComponent,
    AuthorComponent,
    EducationComponent,
    SkillComponent,
    CertificationComponent,
    LeftNavComponent,
    RightNavComponent,
    MainComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
