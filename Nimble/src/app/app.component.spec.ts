import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import { MatchingComponent } from './matching/matching.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { VirtualcComponent } from './virtualc/virtualc.component';
import { IntroIconsComponent } from './intro-icons/intro-icons.component';
import { IntroNimbleComponent } from './intro-nimble/intro-nimble.component';
import { IntroTerminologyComponent } from './intro-terminology/intro-terminology.component';
import { EmailRwcComponent } from './email-rwc/email-rwc.component';
import { IconsTeachComponent } from './icons-teach/icons-teach.component';
import { IntroGesturesComponent } from './intro-gestures/intro-gestures.component';
import { IntroEmailComponent } from './intro-email/intro-email.component';
import { IconsTeachDetailedComponent } from './icons-teach-detailed/icons-teach-detailed.component';
import { DesktopCanvasComponent } from './desktop-canvas/desktop-canvas.component';
import { NimbleHelpComponent } from './nimble-help/nimble-help.component';
import { VideoChatComponent } from './video-chat/video-chat.component';
import { PhoneComponent } from './phone/phone.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        EmailComponent,
        VirtualcComponent,
    		PhoneComponent,
        MatchingComponent,
        FlashcardComponent,
        IntroIconsComponent,
        IntroNimbleComponent,
        IntroTerminologyComponent,
        EmailRwcComponent,
        IconsTeachComponent,
        IntroGesturesComponent,
        IntroEmailComponent,
        IconsTeachDetailedComponent,
        DesktopCanvasComponent,
        IntroTerminologyComponent,
        NimbleHelpComponent,
        VideoChatComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Nimble'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Nimble');
  }));
  it('should render help in the 1st button', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('help');
  }));
});
