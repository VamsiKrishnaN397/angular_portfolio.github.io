import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { CopyrightsComponent } from './copyrights/copyrights.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    SharedModule,
    HomeComponent,
    EducationComponent,
    WorkexperienceComponent,
    ContactComponent,
    ResumeComponent,
    SkillsComponent,
    ProjectsComponent,
    CopyrightsComponent,
    ScrollToTopComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Vamsikrishna Neelam Portfolio';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => { 
      if (!(event instanceof NavigationEnd)) { 
          return; 
      } 
      window.scrollTo(0, 0) 
    }); 
    this.router.navigate(['/home']);
  }
}
