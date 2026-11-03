// @ts-nocheck -- generated from the approved design under its plain-JavaScript contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, signal, computed } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ScreenBase } from "@/lib/screen-base";
import { UI_KIT } from "@/lib/ui";
const template = `
<div class="min-h-screen pb-16" [style.background-color]="brand.backgroundColor" [style.color]="brand.primaryColor" [style.font-family]="brand.fontBody">
  <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

    <!-- ========== MASTHEAD ========== -->
    <header class="text-center">
      <p class="text-[11px] uppercase tracking-[0.38em]" [style.color]="mutedInk()">Reviewer workspace &middot; {{ reviewer }}</p>
      <h1 class="mt-3 text-3xl sm:text-4xl uppercase tracking-[0.2em]" [style.font-family]="brand.fontHeading">Give Feedback</h1>
      <div class="mx-auto mt-6 max-w-xl" aria-hidden="true">
        <div class="flex items-center gap-3">
          <span class="h-px flex-1" [style.background-color]="brand.accentColor"></span>
          <span class="h-2 w-2 rotate-45" [style.background-color]="brand.accentColor"></span>
          <span class="h-px flex-1" [style.background-color]="brand.accentColor"></span>
        </div>
        <div class="mt-1 h-px" [style.background-color]="hairStrong()"></div>
      </div>
      <p class="mx-auto mt-6 max-w-xl text-sm leading-relaxed" [style.color]="mutedInk()">
        FY2026 Half-Year 360&deg; &middot; review period April&ndash;September 2026. Collection closes
        <span class="tabular-nums" [style.color]="brand.primaryColor">14 November 2026</span>.
      </p>
    </header>

    <div class="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[21rem_1fr] lg:items-start">

      <!-- ========== SIDEBAR: REQUESTS ========== -->
      <aside>
        <div class="p-[3px]" [style.border]="'1px solid ' + hairStrong()">
          <div class="px-6 py-6" [style.border]="'1px solid ' + brand.accentColor" style="background-color: rgba(255,255,255,0.58)">

            <h2 class="text-xs uppercase tracking-[0.32em]" [style.font-family]="brand.fontHeading">Your requests</h2>
            <p class="mt-2 text-sm" [style.color]="mutedInk()">
              <span class="tabular-nums" [style.color]="brand.primaryColor">{{ awaitingCount() }}</span> awaiting you &middot;
              <span class="tabular-nums" [style.color]="brand.primaryColor">{{ sentCount() }}</span> sent
            </p>

            <div class="mt-6">
              <label uiLabel for="req-search" class="text-[11px] uppercase tracking-[0.26em]">Find a colleague</label>
              <div class="relative mt-2">
                <ui-icon name="Search" class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-60" aria-hidden="true"></ui-icon>
                <input uiInput id="req-search" name="reqSearch" type="text" [(ngModel)]="query"
                       placeholder="Name or relationship" autocomplete="off"
                       class="w-full pl-9"
                       [style.border-radius]="'0px'"
                       [style.border-color]="hairStrong()"
                       [style.outline-color]="brand.primaryColor">
              </div>
            </div>

            <div class="mt-4 flex items-center justify-between gap-4">
              <span id="show-sent-label" class="text-[11px] uppercase tracking-[0.22em]" [style.color]="mutedInk()">Show sent &amp; closed</span>
              <ui-switch [(checked)]="showCompleted" aria-labelledby="show-sent-label"></ui-switch>
            </div>

            <div class="mt-6 h-px" [style.background-color]="hairStrong()" aria-hidden="true"></div>

            @if (visible().length > 0) {
              <ul role="list" class="mt-1">
                @for (a of visible(); track a.id) {
                  <li class="border-b" [style.border-color]="hair()">
                    <button type="button" (click)="selectAssignment(a.id)"
                            class="flex w-full items-center gap-3 py-4 pr-2 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px]"
                            [style.outline-color]="brand.primaryColor"
                            [style.padding-left]="selectedId() === a.id ? '12px' : '4px'"
                            [style.border-left]="selectedId() === a.id ? '3px solid ' + brand.accentColor : '3px solid transparent'"
                            [style.background-color]="selectedId() === a.id ? gildWash() : 'transparent'"
                            [attr.aria-current]="selectedId() === a.id ? 'true' : null">
                      <ui-avatar [name]="a.name" class="h-9 w-9 shrink-0"></ui-avatar>
                      <span class="min-w-0 flex-1">
                        <span class="block truncate text-sm font-medium">{{ a.name }}</span>
                        <span class="mt-0.5 block truncate text-[11px] uppercase tracking-[0.16em]" [style.color]="mutedInk()">
                          {{ a.relationship }} &middot; {{ subLine(a) }}
                        </span>
                      </span>
                      <span class="flex shrink-0 items-center gap-1 text-[10px] uppercase tracking-[0.18em]"
                            [style.color]="a.status === 'submitted' ? brand.primaryColor : mutedInk()">
                        <ui-icon [name]="statusIcon(a.status)" class="h-3.5 w-3.5" aria-hidden="true"></ui-icon>
                        {{ statusLabel(a.status) }}
                      </span>
                    </button>
                  </li>
                }
              </ul>
            } @else {
              <div class="mt-4">
                <ui-empty title="Nobody by that name"
                          description="No feedback request matches what you typed. Requests are assigned by HR when a cycle launches.">
                  <button uiButton variant="outline" size="sm" (click)="clearSearch()"
                          class="uppercase tracking-[0.2em]"
                          [style.border-radius]="'0px'"
                          [style.border-color]="brand.primaryColor"
                          [style.color]="brand.primaryColor"
                          [style.outline-color]="brand.primaryColor">Clear the search</button>
                </ui-empty>
              </div>
            }

            @if (awaitingCount() === 0) {
              <div class="mt-6 px-4 py-4 text-center" [style.border]="'1px solid ' + brand.accentColor" [style.background-color]="gildWash()">
                <p class="text-[11px] uppercase tracking-[0.26em]" [style.font-family]="brand.fontHeading">All clear</p>
                <p class="mt-2 text-xs leading-relaxed" [style.color]="mutedInk()">Every request assigned to you in this cycle has been sent. HR will tell you if more arrive before 14 November.</p>
              </div>
            }

            <div class="mt-6 h-px" [style.background-color]="hair()" aria-hidden="true"></div>
            <button uiButton variant="ghost" size="sm" (click)="navigate('home')"
                    class="mt-4 w-full uppercase tracking-[0.2em]"
                    [style.border-radius]="'0px'"
                    [style.color]="brand.primaryColor"
                    [style.outline-color]="brand.primaryColor">
              <ui-icon name="ArrowLeft" class="mr-2 h-4 w-4" aria-hidden="true"></ui-icon>
              Back to home
            </button>
          </div>
        </div>
      </aside>

      <!-- ========== MAIN ========== -->
      <main>
        @if (loading()) {
          <!-- LOADING -->
          <div class="p-[3px]" [style.border]="'1px solid ' + hairStrong()">
            <div class="px-6 py-16 text-center" [style.border]="'1px solid ' + brand.accentColor" style="background-color: rgba(255,255,255,0.58)">
              <span class="mx-auto block h-3 w-3 rotate-45 animate-pulse" [style.background-color]="brand.accentColor" aria-hidden="true"></span>
              <p class="mt-6 text-xs uppercase tracking-[0.32em]" [style.font-family]="brand.fontHeading" role="status">Opening the questionnaire</p>
              <p class="mt-3 text-sm" [style.color]="mutedInk()">Fetching the questions set for this cycle&hellip;</p>
              <div class="mx-auto mt-8 max-w-sm space-y-3" aria-hidden="true">
                <div class="h-px w-full animate-pulse" [style.background-color]="hairStrong()"></div>
                <div class="h-px w-4/5 animate-pulse" [style.background-color]="hairStrong()"></div>
                <div class="h-px w-2/3 animate-pulse" [style.background-color]="hairStrong()"></div>
              </div>
            </div>
          </div>
        } @else if (current(); as cur) {

          <!-- SUBJECT HEADER -->
          <div class="p-[3px]" [style.border]="'1px solid ' + hairStrong()">
            <div class="px-6 py-8 text-center sm:px-10" [style.border]="'1px solid ' + brand.accentColor" style="background-color: rgba(255,255,255,0.62)">
              <ui-avatar [name]="cur.name" class="mx-auto h-14 w-14"></ui-avatar>
              <p class="mt-4 text-[11px] uppercase tracking-[0.34em]" [style.color]="mutedInk()">Feedback for</p>
              <h2 class="mt-2 text-2xl uppercase tracking-[0.16em] sm:text-3xl" [style.font-family]="brand.fontHeading">{{ cur.name }}</h2>
              <p class="mt-2 text-sm" [style.color]="mutedInk()">{{ cur.title }}</p>

              <div class="mx-auto mt-6 max-w-md" aria-hidden="true">
                <div class="flex items-center gap-3">
                  <span class="h-px flex-1" [style.background-color]="hairStrong()"></span>
                  <span class="h-2 w-2 rotate-45" [style.background-color]="brand.accentColor"></span>
                  <span class="h-px flex-1" [style.background-color]="hairStrong()"></span>
                </div>
              </div>

              <dl class="mx-auto mt-6 grid max-w-2xl grid-cols-1 sm:grid-cols-3">
                <div class="px-4 py-3">
                  <dt class="text-[10px] uppercase tracking-[0.26em]" [style.color]="mutedInk()">You review as</dt>
                  <dd class="mt-1 text-sm">{{ cur.relationship }}</dd>
                </div>
                <div class="px-4 py-3 sm:border-x" [style.border-color]="hair()">
                  <dt class="text-[10px] uppercase tracking-[0.26em]" [style.color]="mutedInk()">Cycle</dt>
                  <dd class="mt-1 text-sm">{{ cur.cycle }}</dd>
                </div>
                <div class="px-4 py-3">
                  <dt class="text-[10px] uppercase tracking-[0.26em]" [style.color]="mutedInk()">{{ cur.status === 'closed' ? 'Closed' : 'Due' }}</dt>
                  <dd class="mt-1 text-sm tabular-nums">{{ cur.status === 'closed' ? cur.closed_on : cur.due }}</dd>
                </div>
              </dl>

              <button uiButton variant="ghost" size="sm" (click)="askForReport()"
                      class="mt-2 uppercase tracking-[0.2em]"
                      [style.border-radius]="'0px'"
                      [style.color]="mutedInk()"
                      [style.outline-color]="brand.primaryColor">
                <ui-icon name="FileText" class="mr-2 h-4 w-4" aria-hidden="true"></ui-icon>
                Open this report
              </button>
            </div>
          </div>

          <!-- PERMISSION DENIED (collapsible) -->
          <div class="overflow-hidden transition-all duration-300 ease-out"
               [class.max-h-0]="!denied()" [class.opacity-0]="!denied()"
               [class.max-h-96]="denied()" [class.opacity-100]="denied()" [class.mt-6]="denied()">
            @if (denied()) {
              <div class="px-6 py-5" role="status" [style.border]="'1px solid ' + brand.primaryColor" [style.background-color]="gildWash()">
                <div class="flex items-start gap-3">
                  <ui-icon name="AlertCircle" class="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true"></ui-icon>
                  <div class="flex-1">
                    <p class="text-[11px] uppercase tracking-[0.26em]" [style.font-family]="brand.fontHeading">Not yours to open</p>
                    <p class="mt-2 max-w-prose text-sm leading-relaxed">
                      A 360&deg; report is released to the subject, their manager and HR only. You are listed on this cycle as
                      {{ cur.relationship | lowercase }}, so {{ cur.name }}&rsquo;s report stays shut to you. If you need it for a
                      calibration, ask People Ops at people-ops&#64;quorq.ai.
                    </p>
                  </div>
                  <button type="button" (click)="denied.set(false)" aria-label="Dismiss this notice"
                          class="shrink-0 p-2 transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                          [style.outline-color]="brand.primaryColor">
                    <ui-icon name="X" class="h-4 w-4" aria-hidden="true"></ui-icon>
                  </button>
                </div>
              </div>
            }
          </div>

          @switch (cur.status) {

            <!-- ===== SUBMITTED ===== -->
            @case ('submitted') {
              <section class="mt-6" aria-labelledby="sent-heading">
                <div class="p-[3px]" [style.border]="'1px solid ' + brand.primaryColor">
                  <div class="px-6 py-12 text-center sm:px-10" [style.border]="'1px solid ' + brand.accentColor" style="background-color: rgba(255,255,255,0.62)">
                    <span class="mx-auto flex h-12 w-12 rotate-45 items-center justify-center" [style.border]="'1px solid ' + brand.accentColor" [style.background-color]="brand.primaryColor">
                      <ui-icon name="Check" class="h-5 w-5 -rotate-45" [style.color]="brand.accentColor" aria-hidden="true"></ui-icon>
                    </span>
                    <h3 id="sent-heading" class="mt-6 text-lg uppercase tracking-[0.3em]" [style.font-family]="brand.fontHeading">Submitted anonymously</h3>
                    <p class="mt-3 text-sm tabular-nums" [style.color]="mutedInk()">Sealed {{ cur.submitted_at }}</p>

                    <div class="mx-auto mt-6 max-w-md" aria-hidden="true">
                      <div class="flex items-center gap-3">
                        <span class="h-px flex-1" [style.background-color]="hairStrong()"></span>
                        <span class="h-2 w-2 rotate-45" [style.background-color]="brand.accentColor"></span>
                        <span class="h-px flex-1" [style.background-color]="hairStrong()"></span>
                      </div>
                    </div>

                    <p class="mx-auto mt-6 max-w-md text-sm leading-relaxed">
                      Your answers are locked from editing and pooled with the other reviewers before anyone reads them.
                      Neither {{ cur.name }}, their manager nor HR can see which lines were yours.
                    </p>

                    <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                      @if (nextPending(); as nxt) {
                        <button uiButton size="lg" (click)="selectAssignment(nxt.id)"
                                class="uppercase tracking-[0.22em]"
                                [style.border-radius]="'0px'"
                                [style.background-color]="brand.primaryColor"
                                [style.color]="brand.accentColor"
                                [style.outline-color]="brand.primaryColor">
                          Next request: {{ nxt.name }}
                          <ui-icon name="ArrowRight" class="ml-2 h-4 w-4" aria-hidden="true"></ui-icon>
                        </button>
                      }
                      <button uiButton variant="outline" (click)="navigate('home')"
                              class="uppercase tracking-[0.22em]"
                              [style.border-radius]="'0px'"
                              [style.border-color]="brand.primaryColor"
                              [style.color]="brand.primaryColor"
                              [style.outline-color]="brand.primaryColor">Back to home</button>
                    </div>
                  </div>
                </div>
              </section>
            }

            <!-- ===== CYCLE CLOSED ===== -->
            @case ('closed') {
              <section class="mt-6" aria-labelledby="closed-heading">
                <div class="p-[3px]" [style.border]="'1px solid ' + hairStrong()">
                  <div [style.border]="'1px solid ' + brand.accentColor" style="background-color: rgba(255,255,255,0.58)">
                    <div class="px-6 py-8 text-center sm:px-10">
                      <ui-icon name="Clock" class="mx-auto h-6 w-6" aria-hidden="true"></ui-icon>
                      <h3 id="closed-heading" class="mt-4 text-base uppercase tracking-[0.3em]" [style.font-family]="brand.fontHeading">This cycle is closed</h3>
                      <p class="mx-auto mt-4 max-w-md text-sm leading-relaxed">
                        {{ cur.cycle }} closed on <span class="tabular-nums">{{ cur.closed_on }}</span>, so nothing further can be
                        submitted for {{ cur.name }}. The draft below is kept for the record and was never shared.
                      </p>
                    </div>

                    <div class="h-px" [style.background-color]="hair()" aria-hidden="true"></div>

                    <div class="px-6 py-8 sm:px-10">
                      <p class="text-[11px] uppercase tracking-[0.26em]" [style.color]="mutedInk()">Draft as it stood</p>
                      <ul role="list" class="mt-4">
                        @for (q of questions; track q.id; let i = $index) {
                          <li class="flex gap-4 border-t py-4" [style.border-color]="hair()">
                            <span class="w-8 shrink-0 text-xs tracking-[0.2em]" [style.color]="brand.accentColor" [style.font-family]="brand.fontHeading">{{ romans[i] }}</span>
                            <div class="min-w-0 flex-1">
                              <p class="text-sm" [style.color]="mutedInk()">{{ q.text }}</p>
                              <p class="mt-1 text-sm" [class.tabular-nums]="q.type === 'rating'">{{ readOnlyAnswer(q) }}</p>
                            </div>
                          </li>
                        }
                      </ul>

                      <div class="mt-8 flex flex-col items-center gap-3 border-t pt-6 sm:flex-row sm:justify-between" [style.border-color]="hair()">
                        <p class="text-xs" [style.color]="mutedInk()">Submission is blocked for closed cycles.</p>
                        <button uiButton size="lg" disabled
                                class="uppercase tracking-[0.22em] opacity-50"
                                [style.border-radius]="'0px'"
                                [style.background-color]="brand.primaryColor"
                                [style.color]="brand.accentColor">Submit anonymously</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            }

            <!-- ===== ACTIVE QUESTIONNAIRE ===== -->
            @default {
              <!-- anonymity strip -->
              <div class="mt-6 flex items-start gap-3 px-6 py-4" [style.background-color]="brand.primaryColor">
                <ui-icon name="Users" class="mt-0.5 h-4 w-4 shrink-0" [style.color]="brand.accentColor" aria-hidden="true"></ui-icon>
                <p class="text-sm leading-relaxed" [style.color]="brand.backgroundColor">
                  <span class="uppercase tracking-[0.22em]" [style.color]="brand.accentColor">Anonymous.</span>
                  Your name is never attached to an answer. Results are released only once at least
                  <span class="tabular-nums" [style.color]="brand.accentColor">{{ cur.threshold }}</span> reviewers have replied, and then only combined.
                </p>
              </div>

              <!-- validation error (collapsible, keeps input) -->
              <div class="overflow-hidden transition-all duration-300 ease-out"
                   [class.max-h-0]="!showErrors() || missing().length === 0"
                   [class.opacity-0]="!showErrors() || missing().length === 0"
                   [class.max-h-96]="showErrors() && missing().length > 0"
                   [class.opacity-100]="showErrors() && missing().length > 0"
                   [class.mt-6]="showErrors() && missing().length > 0">
                @if (showErrors() && missing().length > 0) {
                  <div class="px-6 py-5" role="alert" [style.border]="'1px solid ' + brand.primaryColor" [style.background-color]="gildWash()">
                    <div class="flex items-start gap-3">
                      <ui-icon name="AlertCircle" class="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true"></ui-icon>
                      <div>
                        <p class="text-[11px] uppercase tracking-[0.26em]" [style.font-family]="brand.fontHeading">Not ready to send</p>
                        <p class="mt-2 max-w-prose text-sm leading-relaxed">
                          {{ missing().length === 1 ? 'One required answer is still blank' : missing().length + ' required answers are still blank' }}:
                          <span class="font-medium">{{ missingLabels() }}</span>. Everything you have already typed is kept exactly as it is.
                        </p>
                      </div>
                    </div>
                  </div>
                }
              </div>

              <section class="mt-6" aria-labelledby="questionnaire-heading">
                <div class="p-[3px]" [style.border]="'1px solid ' + hairStrong()">
                  <div [style.border]="'1px solid ' + brand.accentColor" style="background-color: rgba(255,255,255,0.62)">

                    <!-- progress / focal header -->
                    <div class="px-6 py-8 text-center sm:px-10">
                      <h3 id="questionnaire-heading" class="text-xs uppercase tracking-[0.34em]" [style.font-family]="brand.fontHeading">The questionnaire</h3>
                      <p class="mt-4 text-4xl tabular-nums" [style.font-family]="brand.fontHeading">
                        {{ answeredRequired() }}<span class="text-xl" [style.color]="mutedInk()"> / {{ requiredCount }}</span>
                      </p>
                      <div class="mt-4 flex justify-center gap-2" role="img" [attr.aria-label]="answeredRequired() + ' of ' + requiredCount + ' required answers complete'">
                        @for (q of requiredQuestions; track q.id; let i = $index) {
                          <span class="h-1.5 w-10 transition-colors duration-300"
                                [style.background-color]="i < answeredRequired() ? brand.accentColor : hair()"></span>
                        }
                      </div>
                      <p class="mt-4 text-sm" [style.color]="mutedInk()">
                        Six answers are required. Question VII is optional &mdash; leave it blank if you have nothing to add.
                      </p>
                    </div>

                    <!-- questions -->
                    <div class="px-6 sm:px-10">
                      <ol role="list">
                        @for (q of questions; track q.id; let i = $index) {
                          <li class="border-t py-8" [style.border-color]="hair()">
                            <div class="flex gap-4 sm:gap-6">
                              <span class="w-8 shrink-0 pt-0.5 text-sm tracking-[0.18em]" [style.color]="brand.accentColor" [style.font-family]="brand.fontHeading" aria-hidden="true">{{ romans[i] }}</span>
                              <div class="min-w-0 flex-1">

                                @if (q.type === 'rating') {
                                  <p class="text-base leading-relaxed" [attr.id]="'qlab-' + q.id">
                                    {{ q.text }}
                                    @if (!hasAnswer(q, currentAnswers())) {
                                      <span class="ml-2 align-middle text-[10px] uppercase tracking-[0.2em]" [style.color]="mutedInk()">Required</span>
                                    }
                                  </p>
                                  <div class="mt-5" role="radiogroup" [attr.aria-labelledby]="'qlab-' + q.id">
                                    <div class="flex flex-wrap gap-2">
                                      @for (v of scale; track v) {
                                        <button type="button" role="radio"
                                                [attr.aria-checked]="rating(q.id) === v"
                                                [attr.aria-label]="v + ' of 5 \\u2014 ' + scaleLabels[v - 1]"
                                                (click)="setRating(q.id, v)"
                                                class="h-12 w-12 text-sm tabular-nums transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                                [style.outline-color]="brand.primaryColor"
                                                [style.border]="'1px solid ' + (rating(q.id) === v ? brand.primaryColor : hairStrong())"
                                                [style.background-color]="rating(q.id) === v ? brand.primaryColor : 'rgba(255,255,255,0.7)'"
                                                [style.color]="rating(q.id) === v ? brand.accentColor : brand.primaryColor">{{ v }}</button>
                                      }
                                    </div>
                                    <div class="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.18em]" [style.color]="mutedInk()">
                                      <span>1 &middot; Rarely</span>
                                      <span>5 &middot; Consistently</span>
                                    </div>
                                    <p class="mt-2 text-xs" [style.color]="mutedInk()">
                                      @if (rating(q.id)) {
                                        <span [style.color]="brand.primaryColor">Chosen: <span class="tabular-nums">{{ rating(q.id) }}</span> &mdash; {{ scaleLabels[rating(q.id) - 1] }}</span>
                                      } @else {
                                        No rating chosen yet
                                      }
                                    </p>
                                  </div>
                                } @else {
                                  <label uiLabel [for]="'ta-' + q.id" class="block text-base font-normal leading-relaxed">
                                    {{ q.text }}
                                    @if (!q.required) {
                                      <span class="ml-2 align-middle text-[10px] uppercase tracking-[0.2em]" [style.color]="mutedInk()">Optional</span>
                                    } @else if (!hasAnswer(q, currentAnswers())) {
                                      <span class="ml-2 align-middle text-[10px] uppercase tracking-[0.2em]" [style.color]="mutedInk()">Required</span>
                                    }
                                  </label>
                                  <textarea uiTextarea [id]="'ta-' + q.id" rows="4"
                                            class="mt-4 w-full text-sm leading-relaxed"
                                            [style.border-radius]="'0px'"
                                            [style.border-color]="hairStrong()"
                                            [style.outline-color]="brand.primaryColor"
                                            style="background-color: rgba(255,255,255,0.8)"
                                            [value]="text(q.id)"
                                            (input)="setText(q.id, $event.target.value)"
                                            [attr.placeholder]="q.placeholder"></textarea>
                                  <p class="mt-2 text-xs" [style.color]="mutedInk()">
                                    <span class="tabular-nums">{{ text(q.id).length }}</span> characters &middot; written in your words, shown without your name
                                  </p>
                                }

                              </div>
                            </div>
                          </li>
                        }
                      </ol>
                    </div>

                    <!-- actions -->
                    <div class="border-t px-6 py-6 sm:px-10" [style.border-color]="hairStrong()" style="background-color: rgba(255,255,255,0.4)">
                      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <p class="flex items-center gap-2 text-xs" [style.color]="mutedInk()" role="status">
                          <span class="h-1.5 w-1.5 rotate-45" [style.background-color]="brand.accentColor" aria-hidden="true"></span>
                          @if (phase() === 'saving') {
                            Saving your draft&hellip;
                          } @else if (phase() === 'submitting') {
                            Sealing and sending&hellip;
                          } @else if (savedAt()[cur.id]) {
                            Draft held on this device &middot; last saved <span class="tabular-nums">{{ savedAt()[cur.id] }}</span>
                          } @else {
                            Nothing saved yet for {{ cur.name }}
                          }
                        </p>
                        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
                          <button uiButton variant="outline" (click)="saveDraft()"
                                  [disabled]="phase() !== 'idle'"
                                  class="uppercase tracking-[0.22em]"
                                  [style.border-radius]="'0px'"
                                  [style.border-color]="brand.primaryColor"
                                  [style.color]="brand.primaryColor"
                                  [style.outline-color]="brand.primaryColor">
                            {{ phase() === 'saving' ? 'Saving\\u2026' : 'Save draft' }}
                          </button>
                          <button uiButton size="lg" (click)="submit()"
                                  [disabled]="phase() !== 'idle'"
                                  class="uppercase tracking-[0.22em] transition-opacity"
                                  [style.border-radius]="'0px'"
                                  [style.background-color]="brand.primaryColor"
                                  [style.color]="brand.accentColor"
                                  [style.outline-color]="brand.primaryColor">
                            {{ phase() === 'submitting' ? 'Submitting\\u2026' : 'Submit anonymously' }}
                          </button>
                        </div>
                      </div>
                      <p class="mt-4 text-xs leading-relaxed sm:text-right" [style.color]="mutedInk()">
                        A draft can be reopened until <span class="tabular-nums">14 Nov 2026</span>. Once submitted, answers cannot be edited or withdrawn.
                      </p>
                    </div>

                  </div>
                </div>
              </section>
            }
          }

        } @else {
          <!-- NO SELECTION -->
          <div class="p-[3px]" [style.border]="'1px solid ' + hairStrong()">
            <div class="px-6 py-16 text-center" [style.border]="'1px solid ' + brand.accentColor" style="background-color: rgba(255,255,255,0.58)">
              <span class="mx-auto block h-3 w-3 rotate-45" [style.background-color]="brand.accentColor" aria-hidden="true"></span>
              <h2 class="mt-6 text-base uppercase tracking-[0.3em]" [style.font-family]="brand.fontHeading">Choose a request</h2>
              <p class="mx-auto mt-4 max-w-sm text-sm leading-relaxed" [style.color]="mutedInk()">
                Pick a colleague from the list on the left to open their questionnaire. Each one takes about four minutes.
              </p>
            </div>
          </div>
        }

        <p class="mt-8 text-center text-xs leading-relaxed" [style.color]="mutedInk()">
          Responses are stored in India and released only in aggregate, under the organisation&rsquo;s DPDP notice.
        </p>
      </main>
    </div>
  </div>
</div>
`;

@Component({
  selector: "app-feedback-form-screen",
  imports: [...UI_KIT, FormsModule],
  template,
})
export default class Screen extends ScreenBase {
  reviewer = 'Susan Raya';
  scale = [1, 2, 3, 4, 5];
  scaleLabels = ['Rarely', 'Occasionally', 'Often', 'Usually', 'Consistently'];
  romans = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  questions = [
    { id: 'q1', type: 'rating', required: true, scale_min: 1, scale_max: 5, text: 'Takes ownership of an outcome from the first sketch through to shipped.' },
    { id: 'q2', type: 'rating', required: true, scale_min: 1, scale_max: 5, text: 'Communicates clearly with people outside their own team.' },
    { id: 'q3', type: 'rating', required: true, scale_min: 1, scale_max: 5, text: 'Handles disagreement and feedback without it becoming personal.' },
    { id: 'q4', type: 'rating', required: true, scale_min: 1, scale_max: 5, text: 'Lifts the standard of the work happening around them.' },
    { id: 'q5', type: 'text', required: true, text: 'What should this person carry on doing?', placeholder: 'One or two concrete examples are worth more than adjectives.' },
    { id: 'q6', type: 'text', required: true, text: 'What one change would make the biggest difference to their impact?', placeholder: 'Describe the situation, not the person.' },
    { id: 'q7', type: 'text', required: false, text: 'Anything else worth adding before this goes into the report?', placeholder: 'Leave blank if you have nothing further.' }
  ];

  requiredQuestions = this.questions.filter(function (q) { return q.required; });
  requiredCount = this.questions.filter(function (q) { return q.required; }).length;

  assignments = signal([
    { id: 'asg-4821', name: 'Ananya Deshpande', title: 'Product Manager, Payments · Mumbai', relationship: 'Peer', status: 'draft', cycle: 'FY2026 Half-Year 360°', due: '14 Nov 2026', submitted_at: null, closed_on: null, threshold: 4 },
    { id: 'asg-4833', name: 'Rohit Iyer', title: 'Engineer II, Platform · Bengaluru', relationship: 'Direct report', status: 'pending', cycle: 'FY2026 Half-Year 360°', due: '14 Nov 2026', submitted_at: null, closed_on: null, threshold: 4 },
    { id: 'asg-4855', name: 'Sneha Pillai', title: 'Analyst, People Ops · Pune', relationship: 'Peer', status: 'pending', cycle: 'FY2026 Half-Year 360°', due: '14 Nov 2026', submitted_at: null, closed_on: null, threshold: 4 },
    { id: 'asg-4790', name: 'Meera Krishnan', title: 'Head of Engineering · Bengaluru', relationship: 'Manager', status: 'submitted', cycle: 'FY2026 Half-Year 360°', due: '14 Nov 2026', submitted_at: '28 Oct 2026, 16:40 IST', closed_on: null, threshold: 4 },
    { id: 'asg-4612', name: 'Vikram Sethi', title: 'Designer, Growth · Mumbai', relationship: 'Peer', status: 'closed', cycle: 'Q2 Engineering Pulse', due: '31 Oct 2026', submitted_at: null, closed_on: '31 Oct 2026', threshold: 3 }
  ]);

  answers = signal({
    'asg-4821': {
      q1: 4, q2: 5, q3: 3, q4: null,
      q5: 'Ananya asks the awkward question early. The consent copy for the Mumbai rollout would have slipped a fortnight if she had not pulled legal into the kickoff herself.',
      q6: '', q7: ''
    },
    'asg-4833': {},
    'asg-4855': {},
    'asg-4612': {
      q1: 3, q2: 2, q3: null, q4: null,
      q5: 'Prototypes faster than anyone on the floor — three clickable options by Tuesday was genuinely useful.',
      q6: 'Bring engineering in before the third revision, not after.',
      q7: ''
    }
  });

  savedAt = signal({ 'asg-4821': '2 Nov 2026, 18:24 IST', 'asg-4612': '30 Oct 2026, 09:05 IST' });

  selectedId = signal('asg-4821');
  query = signal('');
  showCompleted = signal(true);
  loading = signal(false);
  phase = signal('idle');
  showErrors = signal(false);
  denied = signal(false);

  hair = computed(() => this.alpha(this.brand.primaryColor, 0.14));
  hairStrong = computed(() => this.alpha(this.brand.primaryColor, 0.3));
  gildWash = computed(() => this.alpha(this.brand.accentColor, 0.26));
  mutedInk = computed(() => this.alpha(this.brand.primaryColor, 0.66));

  visible = computed(() => {
    const q = (this.query() || '').trim().toLowerCase();
    const showAll = this.showCompleted();
    return this.assignments().filter(function (a) {
      const open = a.status === 'draft' || a.status === 'pending';
      if (!showAll && !open) { return false; }
      if (!q) { return true; }
      return a.name.toLowerCase().indexOf(q) > -1 || a.relationship.toLowerCase().indexOf(q) > -1;
    });
  });

  awaitingCount = computed(() => this.assignments().filter(function (a) { return a.status === 'draft' || a.status === 'pending'; }).length);
  sentCount = computed(() => this.assignments().filter(function (a) { return a.status === 'submitted'; }).length);
  current = computed(() => this.assignments().find((a) => a.id === this.selectedId()) || null);
  currentAnswers = computed(() => this.answers()[this.selectedId()] || {});
  nextPending = computed(() => this.assignments().find(function (a) { return a.status === 'draft' || a.status === 'pending'; }) || null);

  missing = computed(() => {
    const a = this.currentAnswers();
    return this.questions.filter((q) => q.required && !this.hasAnswer(q, a));
  });

  answeredRequired = computed(() => this.requiredCount - this.missing().length);

  missingLabels = computed(() => {
    const idx = this.questions;
    const names = this.missing().map((q) => 'question ' + this.romans[idx.indexOf(q)]);
    return names.join(', ');
  });

  alpha(hex, a) {
    const h = (hex || '#000000').replace('#', '');
    const full = h.length === 3 ? h.split('').map(function (c) { return c + c; }).join('') : h;
    const n = parseInt(full, 16);
    return 'rgba(' + ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a + ')';
  }

  hasAnswer(q, a) {
    if (q.type === 'rating') { return typeof a[q.id] === 'number' && a[q.id] > 0; }
    return ((a[q.id] || '') + '').trim().length > 0;
  }

  rating(qid) { const v = this.currentAnswers()[qid]; return typeof v === 'number' ? v : null; }
  text(qid) { return this.currentAnswers()[qid] || ''; }

  answeredFor(id) {
    const a = this.answers()[id] || {};
    return this.requiredQuestions.filter((q) => this.hasAnswer(q, a)).length;
  }

  readOnlyAnswer(q) {
    const a = this.answers()[this.selectedId()] || {};
    if (q.type === 'rating') {
      return typeof a[q.id] === 'number' ? a[q.id] + ' — ' + this.scaleLabels[a[q.id] - 1] : 'Left blank';
    }
    return ((a[q.id] || '') + '').trim().length ? a[q.id] : 'Left blank';
  }

  statusLabel(s) {
    if (s === 'submitted') { return 'Sent'; }
    if (s === 'closed') { return 'Closed'; }
    if (s === 'draft') { return 'Draft'; }
    return 'To do';
  }

  statusIcon(s) {
    if (s === 'submitted') { return 'CheckCircle'; }
    if (s === 'closed') { return 'X'; }
    if (s === 'draft') { return 'Edit'; }
    return 'Clock';
  }

  subLine(a) {
    if (a.status === 'submitted') { return 'sent 28 Oct'; }
    if (a.status === 'closed') { return 'closed ' + a.closed_on; }
    if (a.status === 'draft') { return this.answeredFor(a.id) + ' of ' + this.requiredCount + ' answered'; }
    return 'not started';
  }

  stamp() {
    const d = new Date();
    const hh = ('0' + d.getHours()).slice(-2);
    const mm = ('0' + d.getMinutes()).slice(-2);
    return d.getDate() + ' ' + this.months[d.getMonth()] + ' ' + d.getFullYear() + ', ' + hh + ':' + mm + ' IST';
  }

  clearSearch() { this.query.set(''); }

  askForReport() { this.denied.set(true); }

  selectAssignment(id) {
    if (id === this.selectedId() && !this.loading()) { return; }
    if (this.timer) { clearTimeout(this.timer); }
    this.showErrors.set(false);
    this.denied.set(false);
    this.phase.set('idle');
    this.selectedId.set(id);
    this.loading.set(true);
    this.timer = setTimeout(() => { this.loading.set(false); }, 420);
  }

  setRating(qid, v) {
    const id = this.selectedId();
    this.answers.update(function (m) {
      const row = Object.assign({}, m[id] || {});
      row[qid] = v;
      const next = Object.assign({}, m);
      next[id] = row;
      return next;
    });
  }

  setText(qid, v) {
    const id = this.selectedId();
    this.answers.update(function (m) {
      const row = Object.assign({}, m[id] || {});
      row[qid] = v;
      const next = Object.assign({}, m);
      next[id] = row;
      return next;
    });
  }

  saveDraft() {
    const cur = this.current();
    if (!cur || this.phase() !== 'idle') { return; }
    this.phase.set('saving');
    if (this.saveTimer) { clearTimeout(this.saveTimer); }
    this.saveTimer = setTimeout(() => {
      const t = this.stamp();
      this.savedAt.update(function (m) { const n = Object.assign({}, m); n[cur.id] = t; return n; });
      this.assignments.update(function (list) {
        return list.map(function (a) { return a.id === cur.id ? Object.assign({}, a, { status: a.status === 'pending' ? 'draft' : a.status }) : a; });
      });
      this.phase.set('idle');
    }, 650);
  }

  submit() {
    const cur = this.current();
    if (!cur || this.phase() !== 'idle') { return; }
    if (cur.status === 'submitted' || cur.status === 'closed') { return; }
    if (this.missing().length > 0) { this.showErrors.set(true); return; }
    this.showErrors.set(false);
    this.phase.set('submitting');
    if (this.submitTimer) { clearTimeout(this.submitTimer); }
    this.submitTimer = setTimeout(() => {
      const t = this.stamp();
      this.assignments.update(function (list) {
        return list.map(function (a) { return a.id === cur.id ? Object.assign({}, a, { status: 'submitted', submitted_at: t }) : a; });
      });
      this.answers.update(function (m) { const n = Object.assign({}, m); delete n[cur.id]; return n; });
      this.savedAt.update(function (m) { const n = Object.assign({}, m); delete n[cur.id]; return n; });
      this.phase.set('idle');
    }, 900);
  }
}
