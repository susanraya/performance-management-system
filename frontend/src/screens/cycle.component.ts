// @ts-nocheck -- generated from the approved design under its plain-JavaScript contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, signal, computed } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ScreenBase } from "@/lib/screen-base";
import { UI_KIT } from "@/lib/ui";
const template = `
<div class="min-h-screen w-full" [style.background-color]="brand.backgroundColor" [style.color]="brand.primaryColor" [style.font-family]="brand.fontBody">
  <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

    @if (!isHrAdmin()) {
      <section class="mx-auto max-w-xl">
        <div class="relative px-8 py-10 text-center" [style.background-color]="paper" [style.border]="'1px solid ' + brand.accentColor" [style.outline]="'1px solid ' + brand.primaryColor" style="outline-offset:5px">
          <ui-icon name="AlertCircle" class="mx-auto h-6 w-6" aria-hidden="true"></ui-icon>
          <h1 class="mt-4 text-2xl uppercase tracking-[0.14em]" [style.font-family]="brand.fontHeading">Cycle setup is HR only</h1>
          <div class="mx-auto mt-5 flex max-w-[12rem] items-center gap-3" aria-hidden="true">
            <span class="h-px flex-1 opacity-40" [style.background-color]="brand.neutralColor"></span>
            <span class="h-1.5 w-1.5 rotate-45" [style.background-color]="brand.accentColor"></span>
            <span class="h-px flex-1 opacity-40" [style.background-color]="brand.neutralColor"></span>
          </div>
          <p class="mx-auto mt-5 max-w-sm text-sm leading-relaxed" [style.color]="brand.neutralColor">
            You are signed in as a manager, so cycle configuration, reviewer assignment and the progress dashboard are not available to you.
            Lakshmi Pillai (people.ops&#64;quorq.ai) holds HR/admin rights and can make the change or grant access.
          </p>
          <div class="mt-7 flex justify-center">
            <button uiButton variant="secondary" class="uppercase tracking-[0.18em]" (click)="navigate('home')">Back to home</button>
          </div>
        </div>
      </section>
    } @else {

      <!-- ============ HEADER : the double-framed plate ============ -->
      <header class="mx-auto max-w-4xl">
        <div class="relative px-5 py-8 sm:px-12 sm:py-10 text-center"
             [style.background-color]="paper"
             [style.border]="'1px solid ' + brand.accentColor"
             [style.outline]="'1px solid ' + brand.primaryColor"
             style="outline-offset:5px">
          <span class="absolute left-2 top-2 h-2 w-2 rotate-45" [style.background-color]="brand.accentColor" aria-hidden="true"></span>
          <span class="absolute right-2 top-2 h-2 w-2 rotate-45" [style.background-color]="brand.accentColor" aria-hidden="true"></span>
          <span class="absolute left-2 bottom-2 h-2 w-2 rotate-45" [style.background-color]="brand.accentColor" aria-hidden="true"></span>
          <span class="absolute right-2 bottom-2 h-2 w-2 rotate-45" [style.background-color]="brand.accentColor" aria-hidden="true"></span>

          <p class="text-[11px] uppercase tracking-[0.32em]" [style.color]="brand.neutralColor">Feedback cycle &middot; Drafted 28 Oct 2026 &middot; Susan Raya</p>
          <h1 class="mt-4 text-[26px] sm:text-[36px] leading-tight uppercase tracking-[0.12em]" [style.font-family]="brand.fontHeading">{{ cycleName() }}</h1>

          <div class="mx-auto mt-5 flex max-w-sm items-center gap-3" aria-hidden="true">
            <span class="h-px flex-1 opacity-40" [style.background-color]="brand.neutralColor"></span>
            <span class="h-1.5 w-1.5 rotate-45" [style.background-color]="brand.accentColor"></span>
            <span class="h-px flex-1 opacity-40" [style.background-color]="brand.neutralColor"></span>
          </div>

          <dl class="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-x-10 gap-y-4 text-sm" style="font-variant-numeric: tabular-nums">
            <div>
              <dt class="text-[10px] uppercase tracking-[0.22em]" [style.color]="brand.neutralColor">Review period</dt>
              <dd class="mt-1 font-medium">{{ reviewPeriod() }}</dd>
            </div>
            <div>
              <dt class="text-[10px] uppercase tracking-[0.22em]" [style.color]="brand.neutralColor">Collection window</dt>
              <dd class="mt-1 font-medium">{{ fmtDate(startDate()) }} &ndash; {{ fmtDate(endDate()) }}</dd>
            </div>
            <div>
              <dt class="text-[10px] uppercase tracking-[0.22em]" [style.color]="brand.neutralColor">Minimum reviewers</dt>
              <dd class="mt-1 font-medium">{{ threshold() }} responses</dd>
            </div>
            <div>
              <dt class="text-[10px] uppercase tracking-[0.22em]" [style.color]="brand.neutralColor">Subjects</dt>
              <dd class="mt-1 font-medium">{{ subjects().length }}</dd>
            </div>
          </dl>

          <p class="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            @switch (status()) {
              @case ('draft') {
                <span uiBadge variant="secondary" class="uppercase tracking-[0.18em]">Draft</span>
                <span [style.color]="brand.neutralColor">Nothing has been sent &mdash; reviewers cannot see this cycle yet.</span>
              }
              @case ('active') {
                <span uiBadge variant="success" class="uppercase tracking-[0.18em]">Active</span>
                <span [style.color]="brand.neutralColor">Invitations went out at {{ launchedAt() }} &middot; closes {{ fmtDate(endDate()) }}.</span>
              }
              @default {
                <span uiBadge variant="secondary" class="uppercase tracking-[0.18em]">Closed</span>
                <span [style.color]="brand.neutralColor">Closed {{ closedAt() }} &mdash; no further feedback can be submitted.</span>
              }
            }
          </p>

          <div class="mt-7 flex flex-wrap items-center justify-center gap-3">
            @switch (status()) {
              @case ('draft') {
                <button uiButton size="lg" class="uppercase tracking-[0.2em] transition-opacity motion-reduce:transition-none"
                        [style.background-color]="brand.primaryColor" [style.color]="brand.accentColor"
                        [style.outline-color]="brand.primaryColor"
                        [disabled]="busy() === 'launch'"
                        (click)="launch()">
                  @if (busy() === 'launch') { <span>Sending invitations&hellip;</span> } @else { <span>Launch cycle &middot; invite {{ totals().assigned }} reviewers</span> }
                </button>
                <button uiButton variant="secondary" class="uppercase tracking-[0.18em]" (click)="navigate('feedback-form')">Preview reviewer form</button>
              }
              @case ('active') {
                <button uiButton size="lg" class="uppercase tracking-[0.2em]"
                        [style.background-color]="brand.primaryColor" [style.color]="brand.accentColor"
                        [disabled]="busy() === 'reminders'"
                        (click)="sendReminders()">
                  @if (busy() === 'reminders') { <span>Sending reminders&hellip;</span> } @else { <span>Remind {{ totals().outstanding }} outstanding reviewers</span> }
                </button>
                <button uiButton variant="secondary" class="uppercase tracking-[0.18em]" (click)="askClose()">Close cycle</button>
              }
              @default {
                <button uiButton size="lg" class="uppercase tracking-[0.2em]" [style.background-color]="brand.primaryColor" [style.color]="brand.accentColor" (click)="navigate('report')">Open aggregated reports</button>
                <button uiButton variant="secondary" class="uppercase tracking-[0.18em]" (click)="navigate('employees')">Employee directory</button>
              }
            }
          </div>
        </div>
      </header>

      <!-- ============ CONFIRMATIONS ============ -->
      @if (confirmLaunch()) {
        <section class="mx-auto mt-6 max-w-3xl" [attr.aria-label]="'Confirm launch'">
          <div class="px-6 py-6" [style.background-color]="paper" [style.border]="'1px solid ' + brand.primaryColor">
            <h2 class="text-sm uppercase tracking-[0.2em]" [style.font-family]="brand.fontHeading">Launch with {{ shortAssigned().length }} subject(s) below the minimum?</h2>
            <p class="mt-3 max-w-2xl text-sm leading-relaxed" [style.color]="brand.neutralColor">
              A report is only shown once {{ threshold() }} reviewers have submitted. These subjects have fewer reviewers assigned than that, so their report may be withheld even if everyone answers:
            </p>
            <ul class="mt-3 space-y-1 text-sm" style="font-variant-numeric: tabular-nums">
              @for (s of shortAssigned(); track s.id) {
                <li class="flex items-center gap-2">
                  <ui-icon name="AlertCircle" class="h-4 w-4" aria-hidden="true"></ui-icon>
                  <span>{{ s.name }} &mdash; {{ s.reviewers.length }} of {{ threshold() }} reviewers assigned</span>
                </li>
              }
            </ul>
            <div class="mt-6 flex flex-wrap gap-3">
              <button uiButton class="uppercase tracking-[0.18em]" [style.background-color]="brand.primaryColor" [style.color]="brand.accentColor" (click)="launch()">Launch anyway</button>
              <button uiButton variant="secondary" class="uppercase tracking-[0.18em]" (click)="cancelLaunch()">Add reviewers first</button>
            </div>
          </div>
        </section>
      }

      @if (confirmClose()) {
        <section class="mx-auto mt-6 max-w-3xl" [attr.aria-label]="'Confirm close'">
          <div class="px-6 py-6" [style.background-color]="paper" [style.border]="'1px solid ' + brand.primaryColor">
            <h2 class="text-sm uppercase tracking-[0.2em]" [style.font-family]="brand.fontHeading">Close this cycle now?</h2>
            <p class="mt-3 max-w-2xl text-sm leading-relaxed" [style.color]="brand.neutralColor">
              {{ totals().outstanding }} reviewers have not submitted. Closing ends collection immediately &mdash; their forms are blocked and those responses will never arrive. This cannot be undone from the workspace.
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
              <button uiButton class="uppercase tracking-[0.18em]" [style.background-color]="brand.primaryColor" [style.color]="brand.accentColor" (click)="closeCycle()">Yes, close the cycle</button>
              <button uiButton variant="secondary" class="uppercase tracking-[0.18em]" (click)="confirmClose.set(false)">Keep collecting</button>
            </div>
          </div>
        </section>
      }

      <!-- ============ BANNER ============ -->
      @if (banner(); as b) {
        <div class="mx-auto mt-6 max-w-3xl">
          <div class="flex items-start gap-3 px-5 py-4 transition-opacity motion-reduce:transition-none"
               [attr.role]="b.kind === 'error' ? 'alert' : 'status'"
               [style.border]="'1px solid ' + (b.kind === 'error' ? brand.primaryColor : brand.accentColor)"
               [style.background-color]="b.kind === 'error' ? paperSoft : accentTint">
            <ui-icon [name]="b.kind === 'error' ? 'AlertCircle' : 'CheckCircle'" class="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true"></ui-icon>
            <div class="min-w-0 flex-1">
              <p class="text-sm font-semibold uppercase tracking-[0.12em]">{{ b.title }}</p>
              <p class="mt-1 text-sm leading-relaxed" [style.color]="brand.primaryColor">{{ b.body }}</p>
            </div>
            <button type="button" class="shrink-0 p-1 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    [style.outline-color]="brand.primaryColor" aria-label="Dismiss this message" (click)="banner.set(null)">
              <ui-icon name="X" class="h-4 w-4" aria-hidden="true"></ui-icon>
            </button>
          </div>
        </div>
      }

      <!-- ============ TABS ============ -->
      <div class="mt-10 flex justify-center">
        <ui-tabs [tabs]="tabs" [(value)]="tab"></ui-tabs>
      </div>

      <div class="mx-auto mt-4 flex max-w-xs items-center gap-3" aria-hidden="true">
        <span class="h-px flex-1 opacity-40" [style.background-color]="brand.neutralColor"></span>
        <span class="h-1.5 w-1.5 rotate-45" [style.background-color]="brand.accentColor"></span>
        <span class="h-px flex-1 opacity-40" [style.background-color]="brand.neutralColor"></span>
      </div>

      <!-- ============ PANELS ============ -->
      <section class="mt-8" [attr.aria-label]="'Cycle workspace: ' + tabLabel()">
        @switch (tab()) {

          <!-- ---------- SETUP ---------- -->
          @case ('setup') {
            <div class="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
              <div uiCard class="rounded-none" [style.background-color]="paper" [style.border]="'1px solid ' + brand.neutralColor">
                <div uiCardHeader>
                  <h2 uiCardTitle class="text-base uppercase tracking-[0.2em]" [style.font-family]="brand.fontHeading">Period &amp; rules</h2>
                  <p uiCardDescription>The review period this cycle covers, the window reviewers may answer in, and the anonymity threshold.</p>
                </div>
                <div uiCardContent class="space-y-6">
                  @if (status() !== 'draft') {
                    <p class="flex items-start gap-2 px-4 py-3 text-sm" [style.border]="'1px solid ' + brand.accentColor" [style.background-color]="accentTint">
                      <ui-icon name="Clock" class="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true"></ui-icon>
                      <span>Dates and the reviewer threshold are locked now the cycle is live, so the rules cannot change under reviewers mid-collection.</span>
                    </p>
                  }

                  <div>
                    <label uiLabel for="cycle-name">Cycle name</label>
                    <input uiInput id="cycle-name" class="mt-2 rounded-none" [(ngModel)]="fName" name="fName" [disabled]="status() !== 'draft'" autocomplete="off" />
                  </div>

                  <div class="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label uiLabel for="review-period">Review period</label>
                      <input uiInput id="review-period" class="mt-2 rounded-none" [(ngModel)]="fPeriod" name="fPeriod" [disabled]="status() !== 'draft'" />
                      <p class="mt-2 text-xs" [style.color]="brand.neutralColor">The months being reviewed, e.g. Apr 2026 &ndash; Sep 2026.</p>
                    </div>
                    <div>
                      <label uiLabel for="min-threshold">Minimum reviewers before a report is shown</label>
                      <select uiSelect id="min-threshold" class="mt-2 rounded-none" [(ngModel)]="fThreshold" name="fThreshold" [disabled]="status() !== 'draft'">
                        <option value="3">3 responses</option>
                        <option value="4">4 responses</option>
                        <option value="5">5 responses</option>
                        <option value="6">6 responses</option>
                      </select>
                      <p class="mt-2 text-xs" [style.color]="brand.neutralColor">Below this, results are withheld so no individual reviewer can be identified.</p>
                    </div>
                    <div>
                      <label uiLabel for="start-date">Opens</label>
                      <input uiInput id="start-date" type="date" class="mt-2 rounded-none" style="font-variant-numeric: tabular-nums" [(ngModel)]="fStart" name="fStart" [disabled]="status() !== 'draft'" />
                    </div>
                    <div>
                      <label uiLabel for="end-date">Closes</label>
                      <input uiInput id="end-date" type="date" class="mt-2 rounded-none" style="font-variant-numeric: tabular-nums" [(ngModel)]="fEnd" name="fEnd" [disabled]="status() !== 'draft'" />
                    </div>
                  </div>

                  <hr uiSeparator [style.border-color]="brand.neutralColor" />

                  <div class="flex items-start justify-between gap-6">
                    <div class="max-w-md">
                      <p class="text-sm font-medium">Weekly reminder to anyone still outstanding</p>
                      <p class="mt-1 text-xs leading-relaxed" [style.color]="brand.neutralColor">
                        Emails every Monday at 09:00 IST while the cycle is open. Reviewers who have submitted are skipped.
                      </p>
                    </div>
                    <ui-switch [(checked)]="autoReminders" aria-label="Send an automatic reminder every Monday at 09:00 IST"></ui-switch>
                  </div>

                  @if (setupError()) {
                    <p class="flex items-start gap-2 px-4 py-3 text-sm" role="alert" [style.border]="'1px solid ' + brand.primaryColor" [style.background-color]="paperSoft">
                      <ui-icon name="AlertCircle" class="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true"></ui-icon>
                      <span>{{ setupError() }}</span>
                    </p>
                  }
                </div>
                <div uiCardFooter class="flex flex-wrap items-center justify-between gap-4">
                  <p class="text-xs" [style.color]="brand.neutralColor" role="status">
                    @if (savedNote()) { {{ savedNote() }} } @else { Draft autosaves are not on &mdash; save before you leave this tab. }
                  </p>
                  <button uiButton variant="secondary" class="uppercase tracking-[0.18em]" [disabled]="status() !== 'draft'" (click)="saveDetails()">Save cycle details</button>
                </div>
              </div>

              <aside class="space-y-6">
                <div class="px-6 py-6" [style.background-color]="paper" [style.border]="'1px solid ' + brand.accentColor" [style.outline]="'1px solid ' + brand.primaryColor" style="outline-offset:4px">
                  <h2 class="text-center text-sm uppercase tracking-[0.22em]" [style.font-family]="brand.fontHeading">Launch checklist</h2>
                  <div class="mx-auto mt-4 flex max-w-[8rem] items-center gap-2" aria-hidden="true">
                    <span class="h-px flex-1 opacity-40" [style.background-color]="brand.neutralColor"></span>
                    <span class="h-1.5 w-1.5 rotate-45" [style.background-color]="brand.accentColor"></span>
                    <span class="h-px flex-1 opacity-40" [style.background-color]="brand.neutralColor"></span>
                  </div>
                  <ul class="mt-5 space-y-4 text-sm" style="font-variant-numeric: tabular-nums">
                    @for (c of checklist(); track c.key) {
                      <li class="flex items-start gap-3">
                        <ui-icon [name]="c.ok ? 'Check' : 'AlertCircle'" class="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true"></ui-icon>
                        <span class="flex-1">
                          <span class="font-medium">{{ c.label }}</span>
                          <span class="block text-xs" [style.color]="brand.neutralColor">{{ c.detail }}</span>
                        </span>
                        <button type="button" class="shrink-0 text-xs uppercase tracking-[0.14em] underline underline-offset-4 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                [style.outline-color]="brand.primaryColor" (click)="tab.set(c.tab)">Open</button>
                      </li>
                    }
                  </ul>
                </div>

                <div class="px-6 py-5 text-sm leading-relaxed" [style.border]="'1px solid ' + brand.neutralColor" [style.color]="brand.neutralColor">
                  <h3 class="text-xs uppercase tracking-[0.22em]" [style.color]="brand.primaryColor" [style.font-family]="brand.fontHeading">Scope of reporting</h3>
                  <p class="mt-3">
                    This release produces per-employee aggregated reports and the cycle progress view on this page. Organisation-wide trend analytics and benchmarking across cycles are not part of v1.
                  </p>
                </div>
              </aside>
            </div>
          }

          <!-- ---------- QUESTIONNAIRE ---------- -->
          @case ('questions') {
            <div class="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
              <div>
                <div class="flex flex-wrap items-baseline justify-between gap-3">
                  <h2 class="text-base uppercase tracking-[0.2em]" [style.font-family]="brand.fontHeading">Questionnaire</h2>
                  <p class="text-xs uppercase tracking-[0.18em]" [style.color]="brand.neutralColor" style="font-variant-numeric: tabular-nums">
                    {{ ratingCount() }} rating &middot; {{ textCount() }} open text
                  </p>
                </div>

                @if (questions().length === 0) {
                  <div class="mt-5 px-6 py-8" [style.border]="'1px solid ' + brand.neutralColor" [style.background-color]="paperSoft">
                    <ui-empty title="The questionnaire is empty"
                              description="A cycle cannot launch without at least one question. Start from the competency question most cycles open with, or write your own below.">
                      <button uiButton variant="secondary" class="uppercase tracking-[0.18em]" (click)="addStarterQuestion()">Add the opening competency question</button>
                    </ui-empty>
                  </div>
                } @else {
                  <ol class="mt-5 space-y-px">
                    @for (q of questions(); track q.id; let i = $index) {
                      <li class="px-5 py-5 transition-colors duration-700 motion-reduce:transition-none"
                          [style.border]="'1px solid ' + brand.neutralColor"
                          [style.background-color]="justAdded() === q.id ? accentTint : paper">
                        @if (pendingDelete() === q.id) {
                          <div class="flex flex-wrap items-center justify-between gap-4">
                            <p class="text-sm">Remove question {{ i + 1 }} from this questionnaire?</p>
                            <div class="flex gap-2">
                              <button uiButton size="sm" class="uppercase tracking-[0.14em]" [style.background-color]="brand.primaryColor" [style.color]="brand.accentColor" (click)="removeQuestion(q.id)">Remove</button>
                              <button uiButton size="sm" variant="secondary" class="uppercase tracking-[0.14em]" (click)="pendingDelete.set('')">Keep it</button>
                            </div>
                          </div>
                        } @else {
                          <div class="flex items-start gap-4">
                            <span class="mt-0.5 w-6 shrink-0 text-right text-sm font-semibold" style="font-variant-numeric: tabular-nums" [style.color]="brand.neutralColor">{{ i + 1 }}</span>
                            <div class="min-w-0 flex-1">
                              <p class="text-sm leading-relaxed">{{ q.text }}</p>
                              <p class="mt-2 flex flex-wrap items-center gap-2 text-xs">
                                @if (q.type === 'rating') {
                                  <span uiBadge variant="secondary" class="uppercase tracking-[0.14em]">Rating scale</span>
                                  <span [style.color]="brand.neutralColor" style="font-variant-numeric: tabular-nums">{{ q.scale_min }}&ndash;{{ q.scale_max }}, with &ldquo;no basis to judge&rdquo; allowed</span>
                                } @else {
                                  <span uiBadge variant="secondary" class="uppercase tracking-[0.14em]">Open text</span>
                                  <span [style.color]="brand.neutralColor">Free comment, collated anonymously</span>
                                }
                              </p>
                            </div>
                            @if (status() === 'draft') {
                              <button type="button" class="shrink-0 p-2 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                      [style.outline-color]="brand.primaryColor"
                                      [attr.aria-label]="'Remove question ' + (i + 1)"
                                      (click)="pendingDelete.set(q.id)">
                                <ui-icon name="Trash" class="h-4 w-4" aria-hidden="true"></ui-icon>
                              </button>
                            }
                          </div>
                        }
                      </li>
                    }
                  </ol>
                }
              </div>

              <aside>
                @if (status() === 'draft') {
                  <div class="px-6 py-6" [style.background-color]="paper" [style.border]="'1px solid ' + brand.accentColor" [style.outline]="'1px solid ' + brand.primaryColor" style="outline-offset:4px">
                    <h3 class="text-center text-sm uppercase tracking-[0.22em]" [style.font-family]="brand.fontHeading">Add a question</h3>
                    <div class="mx-auto mt-4 flex max-w-[8rem] items-center gap-2" aria-hidden="true">
                      <span class="h-px flex-1 opacity-40" [style.background-color]="brand.neutralColor"></span>
                      <span class="h-1.5 w-1.5 rotate-45" [style.background-color]="brand.accentColor"></span>
                      <span class="h-px flex-1 opacity-40" [style.background-color]="brand.neutralColor"></span>
                    </div>

                    <div class="mt-5 space-y-5">
                      <div>
                        <label uiLabel for="q-text">Question text</label>
                        <textarea uiTextarea id="q-text" rows="3" class="mt-2 rounded-none" [(ngModel)]="qText" name="qText" placeholder="How well does this person&hellip;"></textarea>
                      </div>
                      <div>
                        <label uiLabel for="q-type">Response type</label>
                        <select uiSelect id="q-type" class="mt-2 rounded-none" [(ngModel)]="qType" name="qType">
                          <option value="rating">Rating scale</option>
                          <option value="text">Open text comment</option>
                        </select>
                      </div>
                      @if (qType() === 'rating') {
                        <div class="grid grid-cols-2 gap-4">
                          <div>
                            <label uiLabel for="q-min">Scale from</label>
                            <select uiSelect id="q-min" class="mt-2 rounded-none" [(ngModel)]="qMin" name="qMin">
                              <option value="0">0</option>
                              <option value="1">1</option>
                            </select>
                          </div>
                          <div>
                            <label uiLabel for="q-max">Scale to</label>
                            <select uiSelect id="q-max" class="mt-2 rounded-none" [(ngModel)]="qMax" name="qMax">
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="7">7</option>
                              <option value="10">10</option>
                            </select>
                          </div>
                        </div>
                      }
                      @if (qError()) {
                        <p class="flex items-start gap-2 px-4 py-3 text-sm" role="alert" [style.border]="'1px solid ' + brand.primaryColor" [style.background-color]="paperSoft">
                          <ui-icon name="AlertCircle" class="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true"></ui-icon>
                          <span>{{ qError() }}</span>
                        </p>
                      }
                      <button uiButton class="w-full uppercase tracking-[0.18em]" [style.background-color]="brand.primaryColor" [style.color]="brand.accentColor" (click)="addQuestion()">
                        <ui-icon name="Plus" class="mr-2 h-4 w-4" aria-hidden="true"></ui-icon>Add to questionnaire
                      </button>
                    </div>
                  </div>
                } @else {
                  <div class="px-6 py-6 text-sm leading-relaxed" [style.border]="'1px solid ' + brand.accentColor" [style.background-color]="accentTint">
                    <h3 class="text-xs uppercase tracking-[0.22em]" [style.font-family]="brand.fontHeading">Locked for fairness</h3>
                    <p class="mt-3">
                      {{ questions().length }} questions were published when the cycle launched. They stay fixed while collection is open so every reviewer answers the same set.
                    </p>
                  </div>
                }
              </aside>
            </div>
          }

          <!-- ---------- SUBJECTS & REVIEWERS ---------- -->
          @case ('subjects') {
            <div class="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
              <div>
                <h2 class="text-base uppercase tracking-[0.2em]" [style.font-family]="brand.fontHeading">Subjects</h2>
                <div class="mt-4">
                  <label uiLabel for="subject-search">Find a subject</label>
                  <div class="relative mt-2">
                    <ui-icon name="Search" class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" aria-hidden="true"></ui-icon>
                    <input uiInput id="subject-search" type="search" class="rounded-none pl-9" placeholder="Name or role" [(ngModel)]="subjectQuery" name="subjectQuery" />
                  </div>
                </div>

                @if (filteredSubjects().length === 0) {
                  <div class="mt-5 px-5 py-8" [style.border]="'1px solid ' + brand.neutralColor" [style.background-color]="paperSoft">
                    <ui-empty title="Nobody in this cycle matches that"
                              [description]="'No subject matches &ldquo;' + subjectQuery() + '&rdquo;. They may not be in this cycle yet &mdash; add them below, or check the directory.'">
                      <button uiButton variant="secondary" size="sm" class="uppercase tracking-[0.14em]" (click)="subjectQuery.set('')">Clear the search</button>
                    </ui-empty>
                  </div>
                } @else {
                  <ul class="mt-5 space-y-px">
                    @for (s of filteredSubjects(); track s.id) {
                      <li>
                        <button type="button"
                                class="flex w-full items-center gap-4 px-4 py-4 text-left transition-colors duration-200 motion-reduce:transition-none focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2"
                                [style.outline-color]="brand.primaryColor"
                                [style.border]="'1px solid ' + (selectedId() === s.id ? brand.primaryColor : brand.neutralColor)"
                                [style.background-color]="selectedId() === s.id ? accentTint : paper"
                                [attr.aria-current]="selectedId() === s.id ? 'true' : null"
                                (click)="selectedId.set(s.id)">
                          <ui-avatar [name]="s.name"></ui-avatar>
                          <span class="min-w-0 flex-1">
                            <span class="block truncate text-sm font-medium">{{ s.name }}</span>
                            <span class="block truncate text-xs" [style.color]="brand.neutralColor">{{ s.title }}</span>
                          </span>
                          <span class="shrink-0 text-right">
                            <span class="block text-sm font-semibold" style="font-variant-numeric: tabular-nums">{{ s.reviewers.length }}</span>
                            <span class="block text-[10px] uppercase tracking-[0.14em]" [style.color]="brand.neutralColor">reviewers</span>
                          </span>
                          @if (s.reviewers.length < thresholdNum()) {
                            <span uiBadge variant="destructive" class="shrink-0 uppercase tracking-[0.12em]">Below min</span>
                          }
                        </button>
                      </li>
                    }
                  </ul>
                }

                @if (status() === 'draft') {
                  <div class="mt-6 px-5 py-5" [style.border]="'1px solid ' + brand.neutralColor">
                    <label uiLabel for="add-subject">Add a subject from the directory</label>
                    <select uiSelect id="add-subject" class="mt-2 rounded-none" [(ngModel)]="addSubjectId" name="addSubjectId">
                      <option value="">Choose an active employee&hellip;</option>
                      @for (c of candidates(); track c.id) {
                        <option [value]="c.id">{{ c.name }} &mdash; {{ c.title }}</option>
                      }
                    </select>
                    <button uiButton variant="secondary" size="sm" class="mt-3 uppercase tracking-[0.14em]" (click)="addSubject()">
                      <ui-icon name="Plus" class="mr-2 h-4 w-4" aria-hidden="true"></ui-icon>Add to cycle
                    </button>
                    @if (subjectError()) {
                      <p class="mt-3 flex items-start gap-2 text-sm" role="alert">
                        <ui-icon name="AlertCircle" class="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true"></ui-icon>
                        <span>{{ subjectError() }}</span>
                      </p>
                    }
                    <p class="mt-3 text-xs leading-relaxed" [style.color]="brand.neutralColor">
                      Only active employees appear here. Joiners and leavers are maintained by hand in the
                      <button type="button" class="underline underline-offset-4 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" [style.outline-color]="brand.primaryColor" (click)="navigate('employees')">employee directory</button>.
                    </p>
                  </div>
                }
              </div>

              <div>
                @if (selected(); as s) {
                  <div class="px-6 py-6" [style.background-color]="paper" [style.border]="'1px solid ' + brand.accentColor" [style.outline]="'1px solid ' + brand.primaryColor" style="outline-offset:4px">
                    <div class="text-center">
                      <h2 class="text-base uppercase tracking-[0.18em]" [style.font-family]="brand.fontHeading">{{ s.name }}</h2>
                      <p class="mt-1 text-xs uppercase tracking-[0.2em]" [style.color]="brand.neutralColor">{{ s.title }}</p>
                      <div class="mx-auto mt-4 flex max-w-[10rem] items-center gap-2" aria-hidden="true">
                        <span class="h-px flex-1 opacity-40" [style.background-color]="brand.neutralColor"></span>
                        <span class="h-1.5 w-1.5 rotate-45" [style.background-color]="brand.accentColor"></span>
                        <span class="h-px flex-1 opacity-40" [style.background-color]="brand.neutralColor"></span>
                      </div>
                      <p class="mt-4 text-sm" style="font-variant-numeric: tabular-nums" [style.color]="brand.neutralColor">
                        {{ s.reviewers.length }} reviewers assigned &middot; minimum {{ threshold() }} to show a report
                      </p>
                    </div>

                    @if (s.reviewers.length < thresholdNum()) {
                      <p class="mt-5 flex items-start gap-2 px-4 py-3 text-sm" [style.border]="'1px solid ' + brand.primaryColor" [style.background-color]="paperSoft">
                        <ui-icon name="AlertCircle" class="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true"></ui-icon>
                        <span>Only {{ s.reviewers.length }} of {{ threshold() }} reviewers are assigned. This report may be withheld to protect anonymity &mdash; accept a suggestion below to close the gap.</span>
                      </p>
                    }

                    @if (s.reviewers.length === 0) {
                      <div class="mt-6">
                        <ui-empty title="No reviewers yet"
                                  description="Nobody has been assigned to give feedback on this person. The suggestions below come from their reporting line.">
                          <button uiButton variant="secondary" size="sm" class="uppercase tracking-[0.14em]" [disabled]="s.suggested.length === 0" (click)="acceptAll(s.id)">Accept all suggestions</button>
                        </ui-empty>
                      </div>
                    } @else {
                      <div class="mt-6 overflow-x-auto">
                        <table uiTable class="w-full" style="font-variant-numeric: tabular-nums">
                          <caption class="sr-only">Reviewers assigned to {{ s.name }}</caption>
                          <thead uiTHead>
                            <tr uiTR>
                              <th uiTH scope="col">Reviewer</th>
                              <th uiTH scope="col">Relationship</th>
                              <th uiTH scope="col">Status</th>
                              @if (status() === 'draft') { <th uiTH scope="col"><span class="sr-only">Remove</span></th> }
                            </tr>
                          </thead>
                          <tbody uiTBody>
                            @for (r of s.reviewers; track r.id) {
                              <tr uiTR class="transition-colors duration-700 motion-reduce:transition-none" [style.background-color]="justAdded() === r.id ? accentTint : 'transparent'">
                                <td uiTD class="font-medium">{{ r.name }}</td>
                                <td uiTD>{{ relLabel(r.relationship_type) }}</td>
                                <td uiTD>
                                  <span class="inline-flex items-center gap-2">
                                    <ui-icon [name]="r.status === 'submitted' ? 'CheckCircle' : 'Clock'" class="h-3.5 w-3.5" aria-hidden="true"></ui-icon>
                                    <span>{{ revStatus(r.status) }}</span>
                                  </span>
                                </td>
                                @if (status() === 'draft') {
                                  <td uiTD class="text-right">
                                    <button type="button" class="p-2 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                            [style.outline-color]="brand.primaryColor"
                                            [attr.aria-label]="'Remove ' + r.name + ' as a reviewer for ' + s.name"
                                            (click)="removeReviewer(s.id, r.id)">
                                      <ui-icon name="X" class="h-4 w-4" aria-hidden="true"></ui-icon>
                                    </button>
                                  </td>
                                }
                              </tr>
                            }
                          </tbody>
                        </table>
                      </div>
                    }

                    @if (status() === 'draft') {
                      <hr uiSeparator class="my-6" [style.border-color]="brand.neutralColor" />
                      <div class="flex flex-wrap items-baseline justify-between gap-3">
                        <h3 class="text-xs uppercase tracking-[0.22em]" [style.font-family]="brand.fontHeading">Suggested from reporting lines</h3>
                        @if (s.suggested.length > 1) {
                          <button uiButton variant="secondary" size="sm" class="uppercase tracking-[0.14em]" (click)="acceptAll(s.id)">Accept all {{ s.suggested.length }}</button>
                        }
                      </div>
                      @if (s.suggested.length === 0) {
                        <p class="mt-3 text-sm leading-relaxed" [style.color]="brand.neutralColor">
                          Every suggested peer, direct report and manager has been accepted. Reviewers outside the reporting line can be added from the directory.
                        </p>
                      } @else {
                        <ul class="mt-4 flex flex-wrap gap-2">
                          @for (g of s.suggested; track g.id) {
                            <li>
                              <button type="button"
                                      class="flex items-center gap-2 px-3 py-2 text-sm transition-colors duration-200 motion-reduce:transition-none focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                      [style.outline-color]="brand.primaryColor"
                                      [style.border]="'1px solid ' + brand.neutralColor"
                                      [attr.aria-label]="'Add ' + g.name + ' (' + relLabel(g.relationship_type) + ') as a reviewer'"
                                      (click)="acceptSuggestion(s.id, g.id)">
                                <ui-icon name="Plus" class="h-3.5 w-3.5" aria-hidden="true"></ui-icon>
                                <span>{{ g.name }}</span>
                                <span class="text-xs" [style.color]="brand.neutralColor">{{ relLabel(g.relationship_type) }}</span>
                              </button>
                            </li>
                          }
                        </ul>
                      }
                    }
                  </div>
                } @else {
                  <div class="px-6 py-10" [style.border]="'1px solid ' + brand.neutralColor" [style.background-color]="paperSoft">
                    <ui-empty title="No subject selected"
                              description="Choose someone from the list to review who gives them feedback.">
                    </ui-empty>
                  </div>
                }
              </div>
            </div>
          }

          <!-- ---------- PROGRESS & DELIVERY ---------- -->
          @default {
            @if (status() === 'draft') {
              <div class="mx-auto max-w-4xl">
                <div class="px-6 py-8 text-center" [style.border]="'1px solid ' + brand.accentColor" [style.background-color]="paper">
                  <h2 class="text-base uppercase tracking-[0.2em]" [style.font-family]="brand.fontHeading">Readiness, before anything is sent</h2>
                  <p class="mx-auto mt-3 max-w-xl text-sm leading-relaxed" [style.color]="brand.neutralColor">
                    Completion figures begin the moment the cycle launches. Until then, this is what would go out: {{ totals().assigned }} invitations across {{ subjects().length }} subjects.
                  </p>
                </div>

                <div class="mt-6 overflow-x-auto" [style.border]="'1px solid ' + brand.neutralColor" [style.background-color]="paper">
                  <table uiTable class="w-full" style="font-variant-numeric: tabular-nums">
                    <caption class="sr-only">Reviewers assigned per subject before launch</caption>
                    <thead uiTHead>
                      <tr uiTR>
                        <th uiTH scope="col">Subject</th>
                        <th uiTH scope="col">Manager</th>
                        <th uiTH scope="col">Peers</th>
                        <th uiTH scope="col">Direct reports</th>
                        <th uiTH scope="col">Assigned</th>
                        <th uiTH scope="col">Ready</th>
                      </tr>
                    </thead>
                    <tbody uiTBody>
                      @for (s of subjects(); track s.id) {
                        <tr uiTR>
                          <td uiTD class="font-medium">{{ s.name }}</td>
                          <td uiTD>{{ countRel(s, 'manager') }}</td>
                          <td uiTD>{{ countRel(s, 'peer') }}</td>
                          <td uiTD>{{ countRel(s, 'direct_report') }}</td>
                          <td uiTD>{{ s.reviewers.length }}</td>
                          <td uiTD>
                            @if (s.reviewers.length >= thresholdNum()) {
                              <span class="inline-flex items-center gap-2"><ui-icon name="Check" class="h-3.5 w-3.5" aria-hidden="true"></ui-icon><span>Meets minimum</span></span>
                            } @else {
                              <span class="inline-flex items-center gap-2"><ui-icon name="AlertCircle" class="h-3.5 w-3.5" aria-hidden="true"></ui-icon><span>Needs {{ thresholdNum() - s.reviewers.length }} more</span></span>
                            }
                          </td>
                        </tr>
                      }
                    </tbody>
                  </table>
                </div>

                <div class="mt-6 px-6 py-5" [style.border]="'1px solid ' + brand.neutralColor">
                  <h3 class="text-xs uppercase tracking-[0.22em]" [style.font-family]="brand.fontHeading">Email delivery</h3>
                  <p class="mt-3 text-sm leading-relaxed" [style.color]="brand.neutralColor">
                    No invitations have been attempted yet. When the cycle launches, every send is listed here &mdash; anything the transactional provider rejects appears with its reason so you can retry it.
                  </p>
                </div>
              </div>
            } @else {
              <div class="space-y-8">
                <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" style="font-variant-numeric: tabular-nums">
                  <ui-stat label="Completion" [value]="totals().pct + '%'" [hint]="totals().submitted + ' of ' + totals().assigned + ' reviewers'"></ui-stat>
                  <ui-stat label="Submitted" [value]="totals().submitted + ''" hint="Responses recorded anonymously"></ui-stat>
                  <ui-stat label="Outstanding" [value]="totals().outstanding + ''" [hint]="status() === 'closed' ? 'Never submitted' : 'Can still be reminded'"></ui-stat>
                  <ui-stat label="Reports withheld" [value]="shortSubmitted().length + ''" [hint]="'Below the minimum of ' + threshold()"></ui-stat>
                </div>

                <div [style.border]="'1px solid ' + brand.accentColor" [style.background-color]="paper">
                  <div class="flex flex-wrap items-center justify-between gap-4 px-6 py-5">
                    <div>
                      <h2 class="text-base uppercase tracking-[0.2em]" [style.font-family]="brand.fontHeading">Per-subject completion</h2>
                      <p class="mt-1 text-xs" [style.color]="brand.neutralColor" role="status">
                        @if (busy() === 'refresh') { Pulling the latest submissions&hellip; }
                        @else { Figures as at {{ lastRefresh() }} IST{{ staleNote() ? ' · ' + staleNote() : '' }} }
                      </p>
                    </div>
                    <div class="flex flex-wrap gap-2">
                      <button uiButton variant="secondary" size="sm" class="uppercase tracking-[0.14em]" [disabled]="busy() === 'refresh'" (click)="refreshFigures()">Refresh figures</button>
                      @if (status() === 'active') {
                        <button uiButton size="sm" class="uppercase tracking-[0.14em]" [style.background-color]="brand.primaryColor" [style.color]="brand.accentColor" [disabled]="busy() === 'reminders'" (click)="sendReminders()">
                          <ui-icon name="Bell" class="mr-2 h-3.5 w-3.5" aria-hidden="true"></ui-icon>Send reminders
                        </button>
                      }
                    </div>
                  </div>
                  <hr uiSeparator [style.border-color]="brand.neutralColor" />
                  <div class="overflow-x-auto">
                    <table uiTable class="w-full" style="font-variant-numeric: tabular-nums">
                      <caption class="sr-only">Submissions against assigned reviewers for each subject</caption>
                      <thead uiTHead>
                        <tr uiTR>
                          <th uiTH scope="col">Subject</th>
                          <th uiTH scope="col">Submitted</th>
                          <th uiTH scope="col">Outstanding</th>
                          <th uiTH scope="col">Progress</th>
                          <th uiTH scope="col">Report</th>
                        </tr>
                      </thead>
                      <tbody uiTBody>
                        @for (s of subjects(); track s.id) {
                          <tr uiTR>
                            <td uiTD>
                              <span class="font-medium">{{ s.name }}</span>
                              <span class="block text-xs" [style.color]="brand.neutralColor">{{ s.title }}</span>
                            </td>
                            <td uiTD>{{ submittedFor(s) }} / {{ s.reviewers.length }}</td>
                            <td uiTD>{{ s.reviewers.length - submittedFor(s) }}</td>
                            <td uiTD class="w-40">
                              <span class="block h-1.5 w-full" [style.border]="'1px solid ' + brand.neutralColor" role="img" [attr.aria-label]="pctFor(s) + ' per cent complete'">
                                <span class="block h-full transition-[width] duration-500 motion-reduce:transition-none" [style.width]="pctFor(s) + '%'" [style.background-color]="brand.accentColor"></span>
                              </span>
                              <span class="mt-1 block text-xs" [style.color]="brand.neutralColor">{{ pctFor(s) }}%</span>
                            </td>
                            <td uiTD>
                              @if (submittedFor(s) >= thresholdNum()) {
                                <button type="button" class="inline-flex items-center gap-1 text-sm underline underline-offset-4 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                        [style.outline-color]="brand.primaryColor"
                                        [attr.aria-label]="'Open the aggregated report for ' + s.name"
                                        (click)="navigate('report')">
                                  <span>View report</span>
                                  <ui-icon name="ChevronRight" class="h-3.5 w-3.5" aria-hidden="true"></ui-icon>
                                </button>
                              } @else {
                                <span class="inline-flex items-center gap-2 text-sm">
                                  <ui-icon name="AlertCircle" class="h-3.5 w-3.5" aria-hidden="true"></ui-icon>
                                  <span>Withheld &middot; needs {{ thresholdNum() - submittedFor(s) }} more</span>
                                </span>
                              }
                            </td>
                          </tr>
                        }
                      </tbody>
                    </table>
                  </div>
                </div>

                <div [style.border]="'1px solid ' + brand.neutralColor" [style.background-color]="paper">
                  <div class="flex flex-wrap items-center justify-between gap-4 px-6 py-5">
                    <div>
                      <h2 class="text-base uppercase tracking-[0.2em]" [style.font-family]="brand.fontHeading">Email delivery</h2>
                      <p class="mt-1 text-xs" [style.color]="brand.neutralColor" style="font-variant-numeric: tabular-nums">
                        {{ emails().length }} sends attempted &middot; {{ failedEmails().length }} need attention
                      </p>
                    </div>
                    <div class="flex items-center gap-3">
                      <span id="show-all-emails" class="text-xs uppercase tracking-[0.14em]" [style.color]="brand.neutralColor">Include delivered</span>
                      <ui-switch [(checked)]="showAllEmails" aria-label="Include successfully delivered emails in the list"></ui-switch>
                    </div>
                  </div>
                  <hr uiSeparator [style.border-color]="brand.neutralColor" />
                  @if (visibleEmails().length === 0) {
                    <div class="px-6 py-8">
                      <ui-empty title="Nothing is stuck"
                                description="Every invitation and reminder for this cycle reached the provider. Turn on &ldquo;include delivered&rdquo; to see the full send log.">
                      </ui-empty>
                    </div>
                  } @else {
                    <div class="overflow-x-auto">
                      <table uiTable class="w-full" style="font-variant-numeric: tabular-nums">
                        <caption class="sr-only">Email delivery attempts for this cycle</caption>
                        <thead uiTHead>
                          <tr uiTR>
                            <th uiTH scope="col">Recipient</th>
                            <th uiTH scope="col">Feedback on</th>
                            <th uiTH scope="col">Kind</th>
                            <th uiTH scope="col">Status</th>
                            <th uiTH scope="col">Attempted</th>
                            <th uiTH scope="col"><span class="sr-only">Action</span></th>
                          </tr>
                        </thead>
                        <tbody uiTBody>
                          @for (e of visibleEmails(); track e.id) {
                            <tr uiTR>
                              <td uiTD class="font-medium">{{ e.to }}</td>
                              <td uiTD>{{ e.subject }}</td>
                              <td uiTD>{{ e.kind === 'invite' ? 'Invitation' : 'Reminder' }}</td>
                              <td uiTD>
                                <span class="inline-flex items-center gap-2">
                                  <ui-icon [name]="e.status === 'failed' ? 'AlertCircle' : 'CheckCircle'" class="h-3.5 w-3.5" aria-hidden="true"></ui-icon>
                                  <span>{{ e.status === 'failed' ? 'Failed' : 'Delivered' }}</span>
                                </span>
                                @if (e.error) {
                                  <span class="mt-1 block max-w-xs text-xs leading-relaxed" [style.color]="brand.neutralColor">{{ e.error }}</span>
                                }
                              </td>
                              <td uiTD>{{ e.attempted_at }}</td>
                              <td uiTD class="text-right">
                                @if (e.status === 'failed') {
                                  <button uiButton variant="secondary" size="sm" class="uppercase tracking-[0.12em]"
                                          [disabled]="busy() === 'retry-' + e.id"
                                          [attr.aria-label]="'Retry the email to ' + e.to"
                                          (click)="retryEmail(e.id)">
                                    @if (busy() === 'retry-' + e.id) { <span>Retrying&hellip;</span> } @else { <span>Retry</span> }
                                  </button>
                                }
                              </td>
                            </tr>
                          }
                        </tbody>
                      </table>
                    </div>
                  }
                </div>

                <p class="mx-auto max-w-2xl text-center text-xs leading-relaxed" [style.color]="brand.neutralColor">
                  Reviewer identities are never shown here or in reports &mdash; only counts and aggregates. Reporting in v1 is per-employee aggregated reports plus this progress view; cross-organisation trends and benchmarking are out of scope.
                </p>
              </div>
            }
          }
        }
      </section>
    }
  </div>
</div>
`;

@Component({
  selector: "app-cycle-screen",
  imports: [...UI_KIT, FormsModule],
  template,
})
export default class Screen extends ScreenBase {
  paper = 'rgba(255,255,255,0.62)';
  paperSoft = 'rgba(255,255,255,0.35)';
  accentTint = 'rgba(159,181,127,0.28)';

  isHrAdmin = signal(true);

  tabs = [
    { value: 'setup', label: 'Cycle setup' },
    { value: 'questions', label: 'Questionnaire' },
    { value: 'subjects', label: 'Subjects & reviewers' },
    { value: 'progress', label: 'Progress & delivery' }
  ];
  tab = signal('setup');

  // ---- committed cycle record ----
  cycleName = signal('Mid-Year 360° — Product & Engineering');
  reviewPeriod = signal('Apr 2026 – Sep 2026');
  startDate = signal('2026-11-03');
  endDate = signal('2026-11-28');
  threshold = signal('4');
  status = signal('draft');
  autoReminders = signal(true);
  launchedAt = signal('');
  closedAt = signal('');

  // ---- setup form model (commits on save) ----
  fName = signal('Mid-Year 360° — Product & Engineering');
  fPeriod = signal('Apr 2026 – Sep 2026');
  fStart = signal('2026-11-03');
  fEnd = signal('2026-11-28');
  fThreshold = signal('4');
  savedNote = signal('');
  setupError = signal('');

  // ---- questionnaire ----
  questions = signal([
    { id: 'q-1', text: 'Communicates with clarity and candour, even when the message is difficult.', type: 'rating', scale_min: 1, scale_max: 5 },
    { id: 'q-2', text: 'Delivers on commitments to the standard and timeline agreed.', type: 'rating', scale_min: 1, scale_max: 5 },
    { id: 'q-3', text: 'Raises the quality of the work of the people around them.', type: 'rating', scale_min: 1, scale_max: 5 },
    { id: 'q-4', text: 'Acts on feedback they receive rather than defending the first answer.', type: 'rating', scale_min: 1, scale_max: 4 },
    { id: 'q-5', text: 'What should this person keep doing? Give one specific example from the last six months.', type: 'text', scale_min: null, scale_max: null },
    { id: 'q-6', text: 'What single change would most increase their impact on the team?', type: 'text', scale_min: null, scale_max: null }
  ]);
  qText = signal('');
  qType = signal('rating');
  qMin = signal('1');
  qMax = signal('5');
  qError = signal('');
  pendingDelete = signal('');
  justAdded = signal('');
  qSeq = 6;

  // ---- subjects & reviewers ----
  subjects = signal([
    {
      id: 'cs-01', name: 'Ananya Krishnan', title: 'Product Design Lead',
      reviewers: [
        { id: 'r-01-1', name: 'Rohan Mehta', relationship_type: 'manager', status: 'not_invited' },
        { id: 'r-01-2', name: 'Kabir Rao', relationship_type: 'peer', status: 'not_invited' },
        { id: 'r-01-3', name: 'Sneha Deshpande', relationship_type: 'peer', status: 'not_invited' },
        { id: 'r-01-4', name: 'Tanvi Bhat', relationship_type: 'peer', status: 'not_invited' },
        { id: 'r-01-5', name: 'Dev Menon', relationship_type: 'direct_report', status: 'not_invited' },
        { id: 'r-01-6', name: 'Riya Chatterjee', relationship_type: 'direct_report', status: 'not_invited' }
      ],
      suggested: [
        { id: 'g-01-1', name: 'Imran Qureshi', relationship_type: 'peer' },
        { id: 'g-01-2', name: 'Neha Kulkarni', relationship_type: 'peer' }
      ]
    },
    {
      id: 'cs-02', name: 'Rohan Mehta', title: 'Engineering Manager',
      reviewers: [
        { id: 'r-02-1', name: 'Lakshmi Pillai', relationship_type: 'manager', status: 'not_invited' },
        { id: 'r-02-2', name: 'Ananya Krishnan', relationship_type: 'peer', status: 'not_invited' },
        { id: 'r-02-3', name: 'Vikram Shetty', relationship_type: 'peer', status: 'not_invited' },
        { id: 'r-02-4', name: 'Nikhil Joshi', relationship_type: 'direct_report', status: 'not_invited' },
        { id: 'r-02-5', name: 'Arjun Patel', relationship_type: 'direct_report', status: 'not_invited' },
        { id: 'r-02-6', name: 'Fatima Sheikh', relationship_type: 'direct_report', status: 'not_invited' },
        { id: 'r-02-7', name: 'Aditya Varma', relationship_type: 'direct_report', status: 'not_invited' }
      ],
      suggested: [{ id: 'g-02-1', name: 'Harsh Vardhan', relationship_type: 'peer' }]
    },
    {
      id: 'cs-03', name: 'Priya Nair', title: 'Senior Accountant',
      reviewers: [
        { id: 'r-03-1', name: 'Gaurav Sinha', relationship_type: 'manager', status: 'not_invited' },
        { id: 'r-03-2', name: 'Zoya Ansari', relationship_type: 'peer', status: 'not_invited' },
        { id: 'r-03-3', name: 'Neha Kulkarni', relationship_type: 'peer', status: 'not_invited' }
      ],
      suggested: [
        { id: 'g-03-1', name: 'Harsh Vardhan', relationship_type: 'peer' },
        { id: 'g-03-2', name: 'Meera Iyer', relationship_type: 'peer' },
        { id: 'g-03-3', name: 'Lakshmi Pillai', relationship_type: 'peer' }
      ]
    },
    {
      id: 'cs-04', name: 'Vikram Shetty', title: 'Customer Success Manager',
      reviewers: [
        { id: 'r-04-1', name: 'Lakshmi Pillai', relationship_type: 'manager', status: 'not_invited' },
        { id: 'r-04-2', name: 'Meera Iyer', relationship_type: 'peer', status: 'not_invited' },
        { id: 'r-04-3', name: 'Rohan Mehta', relationship_type: 'peer', status: 'not_invited' },
        { id: 'r-04-4', name: 'Zoya Ansari', relationship_type: 'direct_report', status: 'not_invited' },
        { id: 'r-04-5', name: 'Imran Qureshi', relationship_type: 'direct_report', status: 'not_invited' }
      ],
      suggested: [{ id: 'g-04-1', name: 'Tanvi Bhat', relationship_type: 'peer' }]
    },
    {
      id: 'cs-05', name: 'Fatima Sheikh', title: 'Data Analyst',
      reviewers: [
        { id: 'r-05-1', name: 'Rohan Mehta', relationship_type: 'manager', status: 'not_invited' },
        { id: 'r-05-2', name: 'Nikhil Joshi', relationship_type: 'peer', status: 'not_invited' },
        { id: 'r-05-3', name: 'Aditya Varma', relationship_type: 'peer', status: 'not_invited' },
        { id: 'r-05-4', name: 'Dev Menon', relationship_type: 'peer', status: 'not_invited' }
      ],
      suggested: [{ id: 'g-05-1', name: 'Riya Chatterjee', relationship_type: 'peer' }]
    },
    {
      id: 'cs-06', name: 'Arjun Patel', title: 'QA Engineer',
      reviewers: [
        { id: 'r-06-1', name: 'Rohan Mehta', relationship_type: 'manager', status: 'not_invited' },
        { id: 'r-06-2', name: 'Nikhil Joshi', relationship_type: 'peer', status: 'not_invited' }
      ],
      suggested: [
        { id: 'g-06-1', name: 'Aditya Varma', relationship_type: 'peer' },
        { id: 'g-06-2', name: 'Harsh Vardhan', relationship_type: 'peer' },
        { id: 'g-06-3', name: 'Sneha Deshpande', relationship_type: 'peer' }
      ]
    },
    {
      id: 'cs-07', name: 'Meera Iyer', title: 'HR Business Partner',
      reviewers: [
        { id: 'r-07-1', name: 'Lakshmi Pillai', relationship_type: 'manager', status: 'not_invited' },
        { id: 'r-07-2', name: 'Vikram Shetty', relationship_type: 'peer', status: 'not_invited' },
        { id: 'r-07-3', name: 'Gaurav Sinha', relationship_type: 'peer', status: 'not_invited' },
        { id: 'r-07-4', name: 'Priya Nair', relationship_type: 'peer', status: 'not_invited' },
        { id: 'r-07-5', name: 'Neha Kulkarni', relationship_type: 'direct_report', status: 'not_invited' }
      ],
      suggested: [{ id: 'g-07-1', name: 'Zoya Ansari', relationship_type: 'peer' }]
    }
  ]);

  directory = [
    {
      id: 'e-21', name: 'Kabir Rao', title: 'Staff Engineer',
      suggested: [
        { id: 'g-21-1', name: 'Rohan Mehta', relationship_type: 'manager' },
        { id: 'g-21-2', name: 'Nikhil Joshi', relationship_type: 'peer' },
        { id: 'g-21-3', name: 'Fatima Sheikh', relationship_type: 'peer' },
        { id: 'g-21-4', name: 'Dev Menon', relationship_type: 'peer' }
      ]
    },
    {
      id: 'e-22', name: 'Sneha Deshpande', title: 'Marketing Manager',
      suggested: [
        { id: 'g-22-1', name: 'Gaurav Sinha', relationship_type: 'manager' },
        { id: 'g-22-2', name: 'Meera Iyer', relationship_type: 'peer' },
        { id: 'g-22-3', name: 'Tanvi Bhat', relationship_type: 'direct_report' }
      ]
    },
    {
      id: 'e-23', name: 'Nikhil Joshi', title: 'Backend Engineer',
      suggested: [
        { id: 'g-23-1', name: 'Rohan Mehta', relationship_type: 'manager' },
        { id: 'g-23-2', name: 'Arjun Patel', relationship_type: 'peer' },
        { id: 'g-23-3', name: 'Kabir Rao', relationship_type: 'peer' },
        { id: 'g-23-4', name: 'Aditya Varma', relationship_type: 'peer' }
      ]
    },
    {
      id: 'e-24', name: 'Lakshmi Pillai', title: 'Director of Operations',
      suggested: [
        { id: 'g-24-1', name: 'Susan Raya', relationship_type: 'manager' },
        { id: 'g-24-2', name: 'Gaurav Sinha', relationship_type: 'peer' },
        { id: 'g-24-3', name: 'Vikram Shetty', relationship_type: 'direct_report' },
        { id: 'g-24-4', name: 'Meera Iyer', relationship_type: 'direct_report' }
      ]
    }
  ];

  selectedId = signal('cs-01');
  subjectQuery = signal('');
  addSubjectId = signal('');
  subjectError = signal('');

  // ---- email delivery ----
  emails = signal([]);
  showAllEmails = signal(false);
  emailSeq = 40;

  // ---- runtime ----
  banner = signal(null);
  busy = signal('');
  confirmLaunch = signal(false);
  confirmClose = signal(false);
  clock = signal(612); // 10:12
  lastRefresh = signal('10:12');
  staleNote = signal('');
  refreshStep = signal(0);
  refreshScript = [9, 7, 5];

  // ---------- derived ----------
  thresholdNum = computed(() => Number(this.threshold()) || 0);

  tabLabel = computed(() => {
    const t = this.tabs.find((x) => x.value === this.tab());
    return t ? t.label : '';
  });

  ratingCount = computed(() => this.questions().filter((q) => q.type === 'rating').length);
  textCount = computed(() => this.questions().filter((q) => q.type === 'text').length);

  filteredSubjects = computed(() => {
    const q = this.subjectQuery().trim().toLowerCase();
    if (!q) return this.subjects();
    return this.subjects().filter(
      (s) => s.name.toLowerCase().includes(q) || s.title.toLowerCase().includes(q)
    );
  });

  selected = computed(() => this.subjects().find((s) => s.id === this.selectedId()) || null);

  candidates = computed(() => {
    const taken = this.subjects().map((s) => s.name);
    return this.directory.filter((d) => !taken.includes(d.name));
  });

  shortAssigned = computed(() =>
    this.subjects().filter((s) => s.reviewers.length < this.thresholdNum())
  );

  shortSubmitted = computed(() =>
    this.subjects().filter((s) => this.submittedFor(s) < this.thresholdNum())
  );

  totals = computed(() => {
    let assigned = 0;
    let submitted = 0;
    for (const s of this.subjects()) {
      assigned += s.reviewers.length;
      submitted += s.reviewers.filter((r) => r.status === 'submitted').length;
    }
    const outstanding = assigned - submitted;
    const pct = assigned === 0 ? 0 : Math.round((submitted / assigned) * 100);
    return { assigned: assigned, submitted: submitted, outstanding: outstanding, pct: pct };
  });

  failedEmails = computed(() => this.emails().filter((e) => e.status === 'failed'));

  visibleEmails = computed(() =>
    this.showAllEmails() ? this.emails() : this.emails().filter((e) => e.status === 'failed')
  );

  checklist = computed(() => {
    const t = this.totals();
    return [
      {
        key: 'questions',
        tab: 'questions',
        ok: this.questions().length > 0,
        label: this.questions().length + ' questions',
        detail: this.questions().length === 0
          ? 'At least one question is required to launch'
          : this.ratingCount() + ' rating scale, ' + this.textCount() + ' open text'
      },
      {
        key: 'subjects',
        tab: 'subjects',
        ok: this.subjects().length > 0,
        label: this.subjects().length + ' subjects',
        detail: t.assigned + ' reviewers assigned in total'
      },
      {
        key: 'threshold',
        tab: 'setup',
        ok: this.shortAssigned().length === 0,
        label: 'Minimum of ' + this.threshold() + ' reviewers',
        detail: this.shortAssigned().length === 0
          ? 'Every subject meets the threshold'
          : this.shortAssigned().length + ' subject(s) below it — reports may be withheld'
      },
      {
        key: 'window',
        tab: 'setup',
        ok: this.endDate() > this.startDate(),
        label: 'Window ' + this.fmtDate(this.startDate()) + ' to ' + this.fmtDate(this.endDate()),
        detail: 'Reviewers can answer for 25 days'
      }
    ];
  });

  // ---------- helpers ----------
  fmtDate(iso) {
    if (!iso) return '—';
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const parts = String(iso).split('-');
    if (parts.length < 3) return String(iso);
    const m = months[Number(parts[1]) - 1] || '';
    return parts[2] + ' ' + m + ' ' + parts[0];
  }

  fmtClock(mins) {
    const h = Math.floor(mins / 60) % 24;
    const m = mins % 60;
    return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
  }

  tick(n) {
    this.clock.set(this.clock() + n);
    return this.fmtClock(this.clock());
  }

  relLabel(t) {
    if (t === 'manager') return 'Manager';
    if (t === 'direct_report') return 'Direct report';
    return 'Peer';
  }

  revStatus(s) {
    if (s === 'submitted') return 'Submitted';
    if (s === 'invited') return 'Awaiting response';
    if (s === 'closed') return 'Closed, no response';
    return 'Not invited yet';
  }

  countRel(s, type) {
    return s.reviewers.filter((r) => r.relationship_type === type).length;
  }

  submittedFor(s) {
    return s.reviewers.filter((r) => r.status === 'submitted').length;
  }

  pctFor(s) {
    if (!s.reviewers.length) return 0;
    return Math.round((this.submittedFor(s) / s.reviewers.length) * 100);
  }

  flash(id) {
    this.justAdded.set(id);
    setTimeout(() => {
      if (this.justAdded() === id) this.justAdded.set('');
    }, 900);
  }

  // ---------- setup ----------
  saveDetails() {
    this.setupError.set('');
    if (!this.fName().trim()) {
      this.setupError.set('Give the cycle a name before saving — reviewers see it in their invitation.');
      return;
    }
    if (this.fEnd() <= this.fStart()) {
      this.setupError.set('The closing date must fall after the opening date. Your dates have been kept so you can adjust them.');
      return;
    }
    this.cycleName.set(this.fName().trim());
    this.reviewPeriod.set(this.fPeriod().trim() || this.reviewPeriod());
    this.startDate.set(this.fStart());
    this.endDate.set(this.fEnd());
    this.threshold.set(this.fThreshold());
    this.savedNote.set('Draft saved at ' + this.tick(2) + ' IST');
    this.banner.set({
      kind: 'success',
      title: 'Cycle details saved',
      body: 'The cycle stays in draft. Reviewers are invited only when you launch it.'
    });
  }

  // ---------- questionnaire ----------
  addQuestion() {
    const text = this.qText().trim();
    if (!text) {
      this.qError.set('Write the question first — reviewers see this wording exactly as typed.');
      return;
    }
    if (this.qType() === 'rating' && Number(this.qMax()) <= Number(this.qMin())) {
      this.qError.set('The top of the scale must be higher than the bottom.');
      return;
    }
    this.qError.set('');
    this.qSeq = this.qSeq + 1;
    const id = 'q-' + this.qSeq;
    const q = {
      id: id,
      text: text,
      type: this.qType(),
      scale_min: this.qType() === 'rating' ? Number(this.qMin()) : null,
      scale_max: this.qType() === 'rating' ? Number(this.qMax()) : null
    };
    this.questions.set(this.questions().concat([q]));
    this.qText.set('');
    this.flash(id);
    this.banner.set({
      kind: 'success',
      title: this.qType() === 'rating' ? 'Rating question added' : 'Open-text question added',
      body: 'Question ' + this.questions().length + ' is now part of the questionnaire for this cycle.'
    });
  }

  addStarterQuestion() {
    this.qSeq = this.qSeq + 1;
    const id = 'q-' + this.qSeq;
    this.questions.set([
      {
        id: id,
        text: 'Communicates with clarity and candour, even when the message is difficult.',
        type: 'rating',
        scale_min: 1,
        scale_max: 5
      }
    ]);
    this.flash(id);
  }

  removeQuestion(id) {
    this.questions.set(this.questions().filter((q) => q.id !== id));
    this.pendingDelete.set('');
  }

  // ---------- subjects & reviewers ----------
  cloneSubjects() {
    return this.subjects().map((s) => ({
      id: s.id,
      name: s.name,
      title: s.title,
      reviewers: s.reviewers.map((r) => ({ id: r.id, name: r.name, relationship_type: r.relationship_type, status: r.status, submitted_at: r.submitted_at })),
      suggested: s.suggested.map((g) => ({ id: g.id, name: g.name, relationship_type: g.relationship_type }))
    }));
  }

  acceptSuggestion(sid, gid) {
    const subs = this.cloneSubjects();
    const s = subs.find((x) => x.id === sid);
    if (!s) return;
    const g = s.suggested.find((x) => x.id === gid);
    if (!g) return;
    s.suggested = s.suggested.filter((x) => x.id !== gid);
    s.reviewers = s.reviewers.concat([
      { id: g.id, name: g.name, relationship_type: g.relationship_type, status: this.status() === 'draft' ? 'not_invited' : 'invited' }
    ]);
    this.subjects.set(subs);
    this.flash(g.id);
  }

  acceptAll(sid) {
    const subs = this.cloneSubjects();
    const s = subs.find((x) => x.id === sid);
    if (!s) return;
    const added = s.suggested.length;
    for (const g of s.suggested) {
      s.reviewers = s.reviewers.concat([
        { id: g.id, name: g.name, relationship_type: g.relationship_type, status: this.status() === 'draft' ? 'not_invited' : 'invited' }
      ]);
    }
    s.suggested = [];
    this.subjects.set(subs);
    this.banner.set({
      kind: 'success',
      title: added + ' suggested reviewers accepted',
      body: s.name + ' now has ' + s.reviewers.length + ' reviewers assigned.'
    });
  }

  removeReviewer(sid, rid) {
    const subs = this.cloneSubjects();
    const s = subs.find((x) => x.id === sid);
    if (!s) return;
    const r = s.reviewers.find((x) => x.id === rid);
    if (!r) return;
    s.reviewers = s.reviewers.filter((x) => x.id !== rid);
    s.suggested = s.suggested.concat([{ id: r.id, name: r.name, relationship_type: r.relationship_type }]);
    this.subjects.set(subs);
  }

  addSubject() {
    this.subjectError.set('');
    const id = this.addSubjectId();
    if (!id) {
      this.subjectError.set('Choose an employee from the list first.');
      return;
    }
    const emp = this.directory.find((d) => d.id === id);
    if (!emp) return;
    const newId = 'cs-' + emp.id;
    this.subjects.set(
      this.subjects().concat([
        {
          id: newId,
          name: emp.name,
          title: emp.title,
          reviewers: [],
          suggested: emp.suggested.map((g) => ({ id: g.id, name: g.name, relationship_type: g.relationship_type }))
        }
      ])
    );
    this.addSubjectId.set('');
    this.selectedId.set(newId);
    this.subjectQuery.set('');
    this.banner.set({
      kind: 'success',
      title: emp.name + ' added as a subject',
      body: emp.suggested.length + ' reviewers are suggested from their reporting line. Accept, add or remove them before you launch.'
    });
  }

  // ---------- launch, reminders, close ----------
  cancelLaunch() {
    this.confirmLaunch.set(false);
    this.tab.set('subjects');
  }

  launch() {
    this.banner.set(null);
    if (this.questions().length === 0) {
      this.confirmLaunch.set(false);
      this.tab.set('questions');
      this.banner.set({
        kind: 'error',
        title: 'This cycle has no questions',
        body: 'Add at least one rating-scale or open-text question before launching. Nothing else you configured was lost.'
      });
      return;
    }
    if (this.subjects().length === 0) {
      this.confirmLaunch.set(false);
      this.tab.set('subjects');
      this.banner.set({
        kind: 'error',
        title: 'No subjects in this cycle',
        body: 'Choose at least one employee to receive feedback before launching.'
      });
      return;
    }
    if (this.shortAssigned().length > 0 && !this.confirmLaunch()) {
      this.confirmLaunch.set(true);
      return;
    }
    this.confirmLaunch.set(false);
    this.busy.set('launch');
    setTimeout(() => {
      const subs = this.cloneSubjects();
      for (const s of subs) {
        for (const r of s.reviewers) r.status = 'invited';
      }
      this.subjects.set(subs);
      const stamp = '03 Nov 2026, ' + this.tick(3);
      this.status.set('active');
      this.launchedAt.set(this.fmtClock(this.clock()));
      this.emails.set([
        { id: 'ed-18', to: 'Imran Qureshi', subject: 'Vikram Shetty', kind: 'invite', status: 'failed', error: 'Provider returned SMTP 452 — recipient mailbox is full.', attempted_at: stamp },
        { id: 'ed-24', to: 'Zoya Ansari', subject: 'Priya Nair', kind: 'invite', status: 'failed', error: 'Transactional provider rejected the API key (401). Check the key before retrying.', attempted_at: stamp },
        { id: 'ed-01', to: 'Rohan Mehta', subject: 'Ananya Krishnan', kind: 'invite', status: 'sent', error: '', attempted_at: stamp },
        { id: 'ed-02', to: 'Kabir Rao', subject: 'Ananya Krishnan', kind: 'invite', status: 'sent', error: '', attempted_at: stamp },
        { id: 'ed-09', to: 'Lakshmi Pillai', subject: 'Rohan Mehta', kind: 'invite', status: 'sent', error: '', attempted_at: stamp },
        { id: 'ed-15', to: 'Neha Kulkarni', subject: 'Priya Nair', kind: 'invite', status: 'sent', error: '', attempted_at: stamp },
        { id: 'ed-29', to: 'Nikhil Joshi', subject: 'Arjun Patel', kind: 'invite', status: 'sent', error: '', attempted_at: stamp }
      ]);
      this.busy.set('');
      this.tab.set('progress');
      this.staleNote.set('No responses yet — invitations have just gone out');
      this.lastRefresh.set(this.fmtClock(this.clock()));
      this.banner.set({
        kind: 'success',
        title: 'Cycle launched · ' + this.totals().assigned + ' invitations attempted',
        body: '2 invitations were rejected by the email provider and are listed under Email delivery, where you can retry them.'
      });
    }, 700);
  }

  sendReminders() {
    const outstanding = this.totals().outstanding;
    if (outstanding === 0) {
      this.banner.set({
        kind: 'success',
        title: 'Nobody left to remind',
        body: 'Every assigned reviewer in this cycle has submitted. No reminder was sent.'
      });
      return;
    }
    this.busy.set('reminders');
    setTimeout(() => {
      const stamp = '03 Nov 2026, ' + this.tick(4);
      this.emailSeq = this.emailSeq + 1;
      const rows = [
        { id: 'ed-' + this.emailSeq, to: 'Tanvi Bhat', subject: 'Ananya Krishnan', kind: 'reminder', status: 'sent', error: '', attempted_at: stamp },
        { id: 'ed-' + (this.emailSeq + 1), to: 'Aditya Varma', subject: 'Rohan Mehta', kind: 'reminder', status: 'sent', error: '', attempted_at: stamp },
        { id: 'ed-' + (this.emailSeq + 2), to: 'Harsh Vardhan', subject: 'Priya Nair', kind: 'reminder', status: 'failed', error: 'Address bounced — mailbox not found (SMTP 550). Check the work email in the directory.', attempted_at: stamp }
      ];
      this.emailSeq = this.emailSeq + 2;
      this.emails.set(rows.concat(this.emails()));
      this.busy.set('');
      this.banner.set({
        kind: 'success',
        title: 'Reminders sent to ' + (outstanding - 1) + ' of ' + outstanding + ' outstanding reviewers',
        body: this.totals().submitted + ' reviewers who already submitted were skipped. 1 reminder bounced — see Email delivery.'
      });
    }, 650);
  }

  refreshFigures() {
    this.busy.set('refresh');
    setTimeout(() => {
      const step = this.refreshStep();
      const n = step < this.refreshScript.length ? this.refreshScript[step] : 0;
      const moved = this.applySubmissions(n);
      this.refreshStep.set(step + 1);
      this.lastRefresh.set(this.tick(6));
      this.busy.set('');
      if (moved === 0) {
        this.staleNote.set('No new submissions since the last check');
      } else {
        this.staleNote.set(moved + ' new submissions since the last check');
      }
    }, 600);
  }

  applySubmissions(n) {
    if (n <= 0) return 0;
    const subs = this.cloneSubjects();
    let left = n;
    let moved = 0;
    let guard = 0;
    while (left > 0 && guard < 40) {
      let movedPass = 0;
      for (const s of subs) {
        if (left <= 0) break;
        const r = s.reviewers.find((x) => x.status === 'invited');
        if (r) {
          r.status = 'submitted';
          r.submitted_at = '03 Nov 2026';
          left = left - 1;
          moved = moved + 1;
          movedPass = movedPass + 1;
        }
      }
      if (movedPass === 0) break;
      guard = guard + 1;
    }
    this.subjects.set(subs);
    return moved;
  }

  retryEmail(id) {
    this.busy.set('retry-' + id);
    setTimeout(() => {
      const stamp = '03 Nov 2026, ' + this.tick(1);
      this.emails.set(
        this.emails().map((e) =>
          e.id === id ? { id: e.id, to: e.to, subject: e.subject, kind: e.kind, status: 'sent', error: '', attempted_at: stamp } : e
        )
      );
      this.busy.set('');
      this.banner.set({
        kind: 'success',
        title: 'Email delivered on retry',
        body: 'The provider accepted the message this time. The reviewer now has a link to their pending feedback.'
      });
    }, 600);
  }

  askClose() {
    this.banner.set(null);
    this.confirmClose.set(true);
  }

  closeCycle() {
    this.confirmClose.set(false);
    const subs = this.cloneSubjects();
    for (const s of subs) {
      for (const r of s.reviewers) {
        if (r.status === 'invited') r.status = 'closed';
      }
    }
    this.subjects.set(subs);
    this.status.set('closed');
    this.closedAt.set('03 Nov 2026 at ' + this.tick(2) + ' IST');
    this.banner.set({
      kind: 'success',
      title: 'Cycle closed',
      body: 'Feedback forms are now blocked for this cycle. Reports that met the minimum of ' + this.threshold() + ' responses are available to each subject, their manager and HR.'
    });
  }
}
