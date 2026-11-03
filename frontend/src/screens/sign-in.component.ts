// @ts-nocheck -- generated from the approved design under its plain-JavaScript contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, signal, computed } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ScreenBase } from "@/lib/screen-base";
import { UI_KIT } from "@/lib/ui";
const template = `
<div class="flex min-h-screen items-center justify-center px-6"
     [style.color]="brand.primaryColor"
     [style.font-family]="brand.fontBody"
     [style.background-color]="brand.backgroundColor">

  <main class="w-full max-w-md p-10 text-center"
        [style.border]="'1px solid ' + brand.accentColor"
        [style.outline]="'1px solid ' + brand.primaryColor"
        [style.outline-offset.px]="3"
        [style.border-radius]="brand.radius">

    <p aria-hidden="true" class="text-sm tracking-[0.5em]" [style.color]="brand.accentColor">&#9670; &#9670; &#9670;</p>

    <h1 class="mt-4 text-2xl"
        style="text-transform:uppercase;letter-spacing:0.3em"
        [style.font-family]="brand.fontHeading">Meridian 360</h1>

    <p class="mt-2 text-[10px] uppercase tracking-[0.35em]" [style.color]="brand.neutralColor">{{ subtitle() }}</p>

    <div class="mt-6">
      <div aria-hidden="true" class="flex items-center gap-3">
        <span class="h-px flex-1" [style.background-color]="brand.accentColor"></span>
        <span class="text-xs" [style.color]="brand.accentColor">&#9670;</span>
        <span class="h-px flex-1" [style.background-color]="brand.accentColor"></span>
      </div>
    </div>

    @switch (mode()) {

      @case ('signin') {
        <form class="mt-8 space-y-5 text-left" (ngSubmit)="submitSignIn()" novalidate>

          @if (error(); as err) {
            <p role="alert"
               class="p-3 transition-opacity duration-200 motion-reduce:transition-none"
               [style.border]="'1px solid ' + brand.primaryColor"
               [style.border-radius]="brand.radius">
              <span class="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em]"
                    [style.font-family]="brand.fontHeading">
                <ui-icon name="AlertCircle" class="h-4 w-4 shrink-0" aria-hidden="true"></ui-icon>
                {{ err.title }}
              </span>
              <span class="mt-2 block text-xs leading-relaxed" [style.color]="brand.neutralColor">{{ err.body }}</span>
            </p>
          }

          <div class="space-y-2">
            <label uiLabel for="ga-email" class="block text-[10px] uppercase tracking-[0.25em]" [style.color]="brand.neutralColor">Work email</label>
            <input uiInput id="ga-email" name="email" type="email" required autocomplete="username"
                   aria-describedby="ga-email-hint"
                   placeholder="priya.raghavan@meridianworks.in"
                   [(ngModel)]="email"
                   (focus)="focused.set('email')" (blur)="focused.set('')"
                   class="h-11 w-full bg-transparent px-3 text-center text-sm"
                   [style.border]="'1px solid ' + brand.accentColor"
                   [style.border-radius]="brand.radius"
                   [style.color]="brand.primaryColor"
                   [style.outline]="focused() === 'email' ? '2px solid ' + brand.primaryColor : 'none'"
                   [style.outline-offset.px]="2">
            <p id="ga-email-hint" class="text-[10px] uppercase tracking-[0.2em]" [style.color]="brand.neutralColor">Accounts are issued by HR. Use your Meridian Works address.</p>
          </div>

          <div class="space-y-2">
            <label uiLabel for="ga-password" class="block text-[10px] uppercase tracking-[0.25em]" [style.color]="brand.neutralColor">Password</label>
            <input uiInput id="ga-password" name="password" type="password" required autocomplete="current-password"
                   [(ngModel)]="password"
                   (focus)="focused.set('password')" (blur)="focused.set('')"
                   class="h-11 w-full bg-transparent px-3 text-center text-sm"
                   [style.border]="'1px solid ' + brand.accentColor"
                   [style.border-radius]="brand.radius"
                   [style.color]="brand.primaryColor"
                   [style.outline]="focused() === 'password' ? '2px solid ' + brand.primaryColor : 'none'"
                   [style.outline-offset.px]="2">
          </div>

          <button type="submit" [disabled]="busy()"
                  (focus)="focused.set('submit')" (blur)="focused.set('')"
                  class="h-12 w-full text-xs transition-opacity duration-200 hover:opacity-90 disabled:opacity-60 motion-reduce:transition-none"
                  style="text-transform:uppercase;letter-spacing:0.3em"
                  [style.font-family]="brand.fontHeading"
                  [style.background-color]="brand.primaryColor"
                  [style.color]="brand.accentColor"
                  [style.border-radius]="brand.radius"
                  [style.outline]="focused() === 'submit' ? '2px solid ' + brand.accentColor : 'none'"
                  [style.outline-offset.px]="3">
            @if (busy()) {
              <span aria-hidden="true" class="mr-2 animate-pulse motion-reduce:animate-none">&#9670;</span>Signing in
            } @else {
              Sign in
            }
          </button>
        </form>
      }

      @case ('reset') {
        <form class="mt-8 space-y-5 text-left" (ngSubmit)="submitResetRequest()" novalidate>

          @if (error(); as err) {
            <p role="alert"
               class="p-3 transition-opacity duration-200 motion-reduce:transition-none"
               [style.border]="'1px solid ' + brand.primaryColor"
               [style.border-radius]="brand.radius">
              <span class="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em]"
                    [style.font-family]="brand.fontHeading">
                <ui-icon name="AlertCircle" class="h-4 w-4 shrink-0" aria-hidden="true"></ui-icon>
                {{ err.title }}
              </span>
              <span class="mt-2 block text-xs leading-relaxed" [style.color]="brand.neutralColor">{{ err.body }}</span>
            </p>
          }

          <p class="text-xs leading-relaxed" [style.color]="brand.neutralColor">
            Give us the address your account uses. If it is registered, a reset link follows by email.
          </p>

          <div class="space-y-2">
            <label uiLabel for="ga-reset-email" class="block text-[10px] uppercase tracking-[0.25em]" [style.color]="brand.neutralColor">Work email</label>
            <input uiInput id="ga-reset-email" name="resetEmail" type="email" required autocomplete="username"
                   placeholder="priya.raghavan@meridianworks.in"
                   [(ngModel)]="email"
                   (focus)="focused.set('resetEmail')" (blur)="focused.set('')"
                   class="h-11 w-full bg-transparent px-3 text-center text-sm"
                   [style.border]="'1px solid ' + brand.accentColor"
                   [style.border-radius]="brand.radius"
                   [style.color]="brand.primaryColor"
                   [style.outline]="focused() === 'resetEmail' ? '2px solid ' + brand.primaryColor : 'none'"
                   [style.outline-offset.px]="2">
          </div>

          <button type="submit" [disabled]="busy()"
                  (focus)="focused.set('resetSubmit')" (blur)="focused.set('')"
                  class="h-12 w-full text-xs transition-opacity duration-200 hover:opacity-90 disabled:opacity-60 motion-reduce:transition-none"
                  style="text-transform:uppercase;letter-spacing:0.3em"
                  [style.font-family]="brand.fontHeading"
                  [style.background-color]="brand.primaryColor"
                  [style.color]="brand.accentColor"
                  [style.border-radius]="brand.radius"
                  [style.outline]="focused() === 'resetSubmit' ? '2px solid ' + brand.accentColor : 'none'"
                  [style.outline-offset.px]="3">
            @if (busy()) {
              <span aria-hidden="true" class="mr-2 animate-pulse motion-reduce:animate-none">&#9670;</span>Sending
            } @else {
              Email me a reset link
            }
          </button>
        </form>
      }

      @case ('sent') {
        <div class="mt-8 space-y-5">
          <p role="status" class="text-lg"
             style="text-transform:uppercase;letter-spacing:0.3em"
             [style.font-family]="brand.fontHeading">Link sent</p>
          <p class="text-xs leading-relaxed" [style.color]="brand.neutralColor">
            If <span class="break-all" [style.color]="brand.primaryColor">{{ sentTo() }}</span> belongs to an account, a reset link is on its way. It expires in
            <span style="font-variant-numeric: tabular-nums" [style.color]="brand.primaryColor">60</span> minutes and can be used once.
          </p>
          <button type="button" (click)="openNewPassword()"
                  (focus)="focused.set('haveLink')" (blur)="focused.set('')"
                  class="h-12 w-full text-xs transition-opacity duration-200 hover:opacity-90 motion-reduce:transition-none"
                  style="text-transform:uppercase;letter-spacing:0.3em"
                  [style.font-family]="brand.fontHeading"
                  [style.background-color]="brand.primaryColor"
                  [style.color]="brand.accentColor"
                  [style.border-radius]="brand.radius"
                  [style.outline]="focused() === 'haveLink' ? '2px solid ' + brand.accentColor : 'none'"
                  [style.outline-offset.px]="3">
            I have the link &#8212; set a new password
          </button>
        </div>
      }

      @case ('new') {
        <form class="mt-8 space-y-5 text-left" (ngSubmit)="submitNewPassword()" novalidate>

          @if (error(); as err) {
            <p role="alert"
               class="p-3 transition-opacity duration-200 motion-reduce:transition-none"
               [style.border]="'1px solid ' + brand.primaryColor"
               [style.border-radius]="brand.radius">
              <span class="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em]"
                    [style.font-family]="brand.fontHeading">
                <ui-icon name="AlertCircle" class="h-4 w-4 shrink-0" aria-hidden="true"></ui-icon>
                {{ err.title }}
              </span>
              <span class="mt-2 block text-xs leading-relaxed" [style.color]="brand.neutralColor">{{ err.body }}</span>
            </p>
          }

          <div class="space-y-2">
            <label uiLabel for="ga-new" class="block text-[10px] uppercase tracking-[0.25em]" [style.color]="brand.neutralColor">New password</label>
            <input uiInput id="ga-new" name="newPassword" type="password" required autocomplete="new-password"
                   aria-describedby="ga-new-rules"
                   [(ngModel)]="newPassword"
                   (focus)="focused.set('new')" (blur)="focused.set('')"
                   class="h-11 w-full bg-transparent px-3 text-center text-sm"
                   [style.border]="'1px solid ' + brand.accentColor"
                   [style.border-radius]="brand.radius"
                   [style.color]="brand.primaryColor"
                   [style.outline]="focused() === 'new' ? '2px solid ' + brand.primaryColor : 'none'"
                   [style.outline-offset.px]="2">
            <p id="ga-new-rules" class="text-[10px] uppercase tracking-[0.2em]" [style.color]="brand.neutralColor">At least 10 characters, including one number.</p>
          </div>

          <div class="space-y-2">
            <label uiLabel for="ga-confirm" class="block text-[10px] uppercase tracking-[0.25em]" [style.color]="brand.neutralColor">Repeat new password</label>
            <input uiInput id="ga-confirm" name="confirmPassword" type="password" required autocomplete="new-password"
                   [(ngModel)]="confirmPassword"
                   (focus)="focused.set('confirm')" (blur)="focused.set('')"
                   class="h-11 w-full bg-transparent px-3 text-center text-sm"
                   [style.border]="'1px solid ' + brand.accentColor"
                   [style.border-radius]="brand.radius"
                   [style.color]="brand.primaryColor"
                   [style.outline]="focused() === 'confirm' ? '2px solid ' + brand.primaryColor : 'none'"
                   [style.outline-offset.px]="2">
          </div>

          <button type="submit" [disabled]="busy()"
                  (focus)="focused.set('newSubmit')" (blur)="focused.set('')"
                  class="h-12 w-full text-xs transition-opacity duration-200 hover:opacity-90 disabled:opacity-60 motion-reduce:transition-none"
                  style="text-transform:uppercase;letter-spacing:0.3em"
                  [style.font-family]="brand.fontHeading"
                  [style.background-color]="brand.primaryColor"
                  [style.color]="brand.accentColor"
                  [style.border-radius]="brand.radius"
                  [style.outline]="focused() === 'newSubmit' ? '2px solid ' + brand.accentColor : 'none'"
                  [style.outline-offset.px]="3">
            @if (busy()) {
              <span aria-hidden="true" class="mr-2 animate-pulse motion-reduce:animate-none">&#9670;</span>Saving
            } @else {
              Set password
            }
          </button>
        </form>
      }

      @case ('updated') {
        <div class="mt-8 space-y-5">
          <p role="status" class="text-lg"
             style="text-transform:uppercase;letter-spacing:0.3em"
             [style.font-family]="brand.fontHeading">Password updated</p>
          <p class="text-xs leading-relaxed" [style.color]="brand.neutralColor">
            The old link is now spent. Sign in with your new password to reach your cycles.
          </p>
          <button type="button" (click)="backToSignIn()"
                  (focus)="focused.set('afterUpdate')" (blur)="focused.set('')"
                  class="h-12 w-full text-xs transition-opacity duration-200 hover:opacity-90 motion-reduce:transition-none"
                  style="text-transform:uppercase;letter-spacing:0.3em"
                  [style.font-family]="brand.fontHeading"
                  [style.background-color]="brand.primaryColor"
                  [style.color]="brand.accentColor"
                  [style.border-radius]="brand.radius"
                  [style.outline]="focused() === 'afterUpdate' ? '2px solid ' + brand.accentColor : 'none'"
                  [style.outline-offset.px]="3">
            Sign in
          </button>
        </div>
      }

      @case ('done') {
        <div class="mt-8 space-y-5">
          <p role="status" class="text-lg"
             style="text-transform:uppercase;letter-spacing:0.3em"
             [style.font-family]="brand.fontHeading">Admitted</p>
          <p class="text-xs leading-relaxed break-all" [style.color]="brand.neutralColor">Signed in as {{ sentTo() }}</p>
          <button type="button" (click)="navigate('home')"
                  (focus)="focused.set('enter')" (blur)="focused.set('')"
                  class="h-12 w-full text-xs transition-opacity duration-200 hover:opacity-90 motion-reduce:transition-none"
                  style="text-transform:uppercase;letter-spacing:0.3em"
                  [style.font-family]="brand.fontHeading"
                  [style.background-color]="brand.primaryColor"
                  [style.color]="brand.accentColor"
                  [style.border-radius]="brand.radius"
                  [style.outline]="focused() === 'enter' ? '2px solid ' + brand.accentColor : 'none'"
                  [style.outline-offset.px]="3">
            Enter the workspace
          </button>
        </div>
      }
    }

    @if (mode() === 'signin') {
      <p class="mt-7 text-[10px] uppercase tracking-[0.25em]" [style.color]="brand.neutralColor">
        Forgotten your password? &#8212;
        <button type="button" (click)="openReset()"
                (focus)="focused.set('footer')" (blur)="focused.set('')"
                class="underline underline-offset-4"
                [style.color]="brand.accentColor"
                [style.outline]="focused() === 'footer' ? '2px solid ' + brand.primaryColor : 'none'"
                [style.outline-offset.px]="2">Reset it by email</button>
      </p>
    } @else if (mode() === 'done') {
      <p class="mt-7 text-[10px] uppercase tracking-[0.25em]" [style.color]="brand.neutralColor">
        Not Meridian Works? &#8212;
        <button type="button" (click)="backToSignIn()"
                (focus)="focused.set('footer')" (blur)="focused.set('')"
                class="underline underline-offset-4"
                [style.color]="brand.accentColor"
                [style.outline]="focused() === 'footer' ? '2px solid ' + brand.primaryColor : 'none'"
                [style.outline-offset.px]="2">Sign in as someone else</button>
      </p>
    } @else {
      <p class="mt-7 text-[10px] uppercase tracking-[0.25em]" [style.color]="brand.neutralColor">
        Remembered it? &#8212;
        <button type="button" (click)="backToSignIn()"
                (focus)="focused.set('footer')" (blur)="focused.set('')"
                class="underline underline-offset-4"
                [style.color]="brand.accentColor"
                [style.outline]="focused() === 'footer' ? '2px solid ' + brand.primaryColor : 'none'"
                [style.outline-offset.px]="2">Back to sign in</button>
      </p>
    }

  </main>
</div>
`;

@Component({
  selector: "app-sign-in-screen",
  imports: [...UI_KIT, FormsModule],
  template,
})
export default class Screen extends ScreenBase {
  mode = signal('signin');
  email = signal('');
  password = signal('');
  newPassword = signal('');
  confirmPassword = signal('');
  focused = signal('');
  busy = signal(false);
  error = signal(null);
  sentTo = signal('');

  subtitle = computed(() => {
    const m = this.mode();
    if (m === 'reset' || m === 'sent') return 'Password reset';
    if (m === 'new' || m === 'updated') return 'Choose a new password';
    if (m === 'done') return 'Review period 2026';
    return 'Sign in';
  });

  openReset() {
    this.error.set(null);
    this.mode.set('reset');
  }

  openNewPassword() {
    this.error.set(null);
    this.newPassword.set('');
    this.confirmPassword.set('');
    this.mode.set('new');
  }

  backToSignIn() {
    this.error.set(null);
    this.password.set('');
    this.mode.set('signin');
  }

  submitSignIn() {
    if (this.busy()) return;
    const address = this.email().trim().toLowerCase();
    const secret = this.password();

    if (!address || !secret) {
      this.error.set({
        title: 'Both fields needed',
        body: 'Enter your work email address and your password to continue.'
      });
      return;
    }

    this.error.set(null);
    this.busy.set(true);
    setTimeout(() => {
      this.busy.set(false);
      if (address.indexOf('@meridianworks.in') > -1 && secret.length >= 8) {
        this.sentTo.set(address);
        this.mode.set('done');
      } else {
        this.error.set({
          title: 'Not admitted',
          body: 'That email address and password do not match an account. Check both and try again.'
        });
      }
    }, 650);
  }

  submitResetRequest() {
    if (this.busy()) return;
    const address = this.email().trim().toLowerCase();

    if (!address || address.indexOf('@') < 1) {
      this.error.set({
        title: 'Email needed',
        body: 'Enter the work email address your Meridian 360 account uses, such as priya.raghavan@meridianworks.in.'
      });
      return;
    }

    this.error.set(null);
    this.busy.set(true);
    setTimeout(() => {
      this.busy.set(false);
      this.sentTo.set(address);
      this.mode.set('sent');
    }, 650);
  }

  submitNewPassword() {
    if (this.busy()) return;
    const next = this.newPassword();
    const again = this.confirmPassword();

    if (next.length < 10 || !/[0-9]/.test(next)) {
      this.error.set({
        title: 'Password too weak',
        body: 'Use at least 10 characters and include one number. Your entries are kept as typed.'
      });
      return;
    }
    if (next !== again) {
      this.error.set({
        title: 'Entries differ',
        body: 'The two passwords do not match. Retype the second one.'
      });
      return;
    }

    this.error.set(null);
    this.busy.set(true);
    setTimeout(() => {
      this.busy.set(false);
      this.password.set('');
      this.newPassword.set('');
      this.confirmPassword.set('');
      this.mode.set('updated');
    }, 650);
  }
}
