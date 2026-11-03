// @ts-nocheck -- generated from the approved design under its plain-JavaScript contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, signal, computed } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ScreenBase } from "@/lib/screen-base";
import { UI_KIT } from "@/lib/ui";
const template = `
<style>
  .gz-focus:focus-visible { outline: 2px solid var(--gz-primary); outline-offset: 3px; }
  .gz-bar { transition: width 460ms cubic-bezier(.2,.7,.3,1); }
  &#64;keyframes gz-rise { from { opacity: 0; transform: translateY(7px); } to { opacity: 1; transform: none; } }
  &#64;keyframes gz-breathe { 0%, 100% { opacity: .3 } 50% { opacity: .68 } }
  .gz-rise { animation: gz-rise 340ms ease-out both; }
  .gz-breathe { animation: gz-breathe 1.5s ease-in-out infinite; }
  &#64;media (prefers-reduced-motion: reduce) {
    .gz-rise, .gz-breathe { animation: none !important; }
    .gz-bar { transition: none !important; }
  }
</style>

<div class="min-h-full pb-20"
     [style.--gz-primary]="brand.primaryColor"
     [style.--gz-accent]="brand.accentColor"
     [style.background-color]="brand.backgroundColor"
     [style.font-family]="brand.fontBody"
     [style.color]="brand.primaryColor">

  <!-- ===== Masthead ===== -->
  <header class="mx-auto max-w-6xl px-4 pt-10 text-center sm:pt-14">
    <p class="text-[11px] uppercase tracking-[0.42em]" [style.color]="brand.neutralColor">Three&nbsp;hundred&nbsp;and&nbsp;sixty degree feedback</p>
    <h1 class="mt-4 text-[32px] uppercase leading-[1.15] tracking-[0.22em] sm:text-[38px]"
        [style.font-family]="brand.fontHeading">Feedback report</h1>
    <p class="mx-auto mt-4 max-w-[58ch] text-[15px] leading-7" [style.color]="brand.neutralColor">
      One employee&rsquo;s results, gathered from every reviewer and shown as a whole. No answer here carries a name.
    </p>

    <div class="mt-7 flex items-center justify-center gap-4" aria-hidden="true">
      <span class="flex-1 max-w-[200px]">
        <span class="block h-px" [style.background-color]="brand.primaryColor"></span>
        <span class="mt-[3px] block h-px" [style.background-color]="brand.accentColor"></span>
      </span>
      <span class="h-2.5 w-2.5 rotate-45 border" [style.border-color]="brand.accentColor" [style.background-color]="brand.primaryColor"></span>
      <span class="flex-1 max-w-[200px]">
        <span class="block h-px" [style.background-color]="brand.primaryColor"></span>
        <span class="mt-[3px] block h-px" [style.background-color]="brand.accentColor"></span>
      </span>
    </div>
  </header>

  <!-- ===== Viewing-as strip ===== -->
  <div class="mx-auto mt-8 max-w-6xl px-4">
    <div class="p-[3px]" [style.border]="'1px solid ' + brand.primaryColor">
      <div class="flex flex-col gap-5 px-5 py-4 sm:flex-row sm:items-end sm:justify-between"
           [style.border]="'1px solid ' + brand.accentColor"
           [style.background-color]="surface()">
        <div class="w-full sm:max-w-sm">
          <label uiLabel for="viewer-role" class="text-[11px] uppercase tracking-[0.28em]">Viewing as</label>
          <select uiSelect id="viewer-role" class="gz-focus mt-2 w-full"
                  [ngModel]="role()" (ngModelChange)="setRole($event)">
            @for (r of roleOptions; track r.value) {
              <option [value]="r.value">{{ r.label }}</option>
            }
          </select>
        </div>
        <p class="text-[12px] leading-6 sm:max-w-[34ch] sm:text-right" [style.color]="brand.neutralColor">
          Reports are open to the subject, their manager and People&nbsp;Ops. Everyone else is refused, by role.
        </p>
      </div>
    </div>
  </div>

  <!-- ===== Body ===== -->
  <div class="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-8 px-4 lg:grid-cols-12">

    <!-- Rail -->
    <aside class="lg:col-span-4">
      <div class="p-[3px]" [style.border]="'1px solid ' + brand.primaryColor">
        <div class="h-full py-5" [style.border]="'1px solid ' + brand.accentColor" [style.background-color]="surface()">
          <div class="px-5">
            <h2 class="text-[13px] uppercase tracking-[0.3em]" [style.font-family]="brand.fontHeading">Cycle subjects</h2>
            <p class="mt-1 text-xs" [style.color]="brand.neutralColor" style="font-variant-numeric: tabular-nums;">
              {{ rows().length }} of {{ subjects.length }} shown &middot; H2 2026 leadership 360
            </p>

            <div class="mt-4">
              <label uiLabel for="subject-search" class="text-[11px] uppercase tracking-[0.28em]">Find a subject</label>
              <div class="relative mt-2">
                <input uiInput id="subject-search" type="search" class="gz-focus w-full pl-9"
                       placeholder="Priya, design, engineering" [(ngModel)]="query" />
                <ui-icon name="Search" class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" aria-hidden="true"></ui-icon>
              </div>
            </div>
          </div>

          @if (rows().length) {
            <ul role="list" class="mt-5">
              @for (s of rows(); track s.id) {
                <li [style.border-top]="'1px solid ' + hairline()">
                  <button type="button" class="gz-focus w-full px-5 py-4 text-left transition-colors duration-200"
                          (click)="selectSubject(s.id)"
                          [attr.aria-current]="s.id === selectedId() ? 'true' : null"
                          [style.background-color]="s.id === selectedId() ? tint(brand.accentColor, 0.3) : 'transparent'"
                          [style.border-left]="'3px solid ' + (s.id === selectedId() ? brand.primaryColor : 'transparent')">
                    <span class="flex items-start justify-between gap-3">
                      <span class="min-w-0">
                        <span class="block truncate text-[15px]">{{ s.name }}</span>
                        <span class="mt-0.5 block truncate text-xs" [style.color]="brand.neutralColor">{{ s.title }}</span>
                      </span>
                      @switch (s.state) {
                        @case ('ready') { <span uiBadge variant="success" class="shrink-0">Ready</span> }
                        @case ('withheld') { <span uiBadge variant="secondary" class="shrink-0">Withheld</span> }
                        @default { <span uiBadge variant="outline" class="shrink-0">Restricted</span> }
                      }
                    </span>
                    <span class="mt-2 block text-[11px] uppercase tracking-[0.2em]"
                          style="font-variant-numeric: tabular-nums;"
                          [style.color]="brand.neutralColor">
                      {{ s.submitted }} / {{ s.assigned }} reviewers in
                    </span>
                  </button>
                </li>
              }
            </ul>
          } @else {
            <div class="px-5 pb-2 pt-6">
              <ui-empty title="Nobody by that name"
                        description="No subject in this cycle matches what you typed. Try a surname, or clear the search to see all five.">
                <button uiButton variant="secondary" size="sm" class="gz-focus" (click)="query.set('')">Clear the search</button>
              </ui-empty>
            </div>
          }
        </div>
      </div>

      <p class="mt-4 px-1 text-[12px] leading-6" [style.color]="brand.neutralColor">
        Subjects and reviewers are set in the cycle workspace.
        <button type="button" class="gz-focus underline underline-offset-4" (click)="navigate('cycle')">Open cycle workspace</button>
      </p>
    </aside>

    <!-- Main report -->
    <section class="lg:col-span-8">
      <div class="p-[3px]" [style.border]="'1px solid ' + brand.primaryColor">
        <div class="h-full" [style.border]="'1px solid ' + brand.accentColor" [style.background-color]="surface()">

          @if (denied()) {
            <!-- ===== Permission denied ===== -->
            <div class="gz-rise px-6 py-16 text-center sm:px-14">
              <span class="mx-auto flex h-12 w-12 rotate-45 items-center justify-center border"
                    [style.border-color]="brand.primaryColor" aria-hidden="true">
                <span class="h-5 w-5 -rotate-45">
                  <ui-icon name="AlertCircle" class="h-5 w-5"></ui-icon>
                </span>
              </span>
              <h2 class="mt-7 text-[20px] uppercase tracking-[0.24em]" [style.font-family]="brand.fontHeading">Report closed to you</h2>
              <p class="mx-auto mt-4 max-w-[54ch] text-[15px] leading-7">{{ deniedReason() }}</p>
              <p class="mx-auto mt-3 max-w-[54ch] text-[14px] leading-7" [style.color]="brand.neutralColor">
                Only {{ selected().name }}, their manager {{ selected().managerName }} and People&nbsp;Ops can open it.
                To be added as a named viewer for this cycle, write to Susan Raya at people&#64;quorq.ai.
              </p>
              <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
                @if (ownReportId()) {
                  <button uiButton class="gz-focus px-6"
                          [style.background-color]="brand.primaryColor"
                          [style.color]="brand.accentColor"
                          (click)="selectSubject(ownReportId())">Open my own report</button>
                }
                <button uiButton variant="secondary" class="gz-focus" (click)="navigate('home')">Back to home</button>
              </div>
            </div>

          } @else if (loading()) {
            <!-- ===== Loading ===== -->
            <div class="px-6 py-20 text-center sm:px-14" role="status" aria-live="polite">
              <div class="mx-auto flex max-w-sm items-center justify-center gap-4 gz-breathe" aria-hidden="true">
                <span class="h-px flex-1" [style.background-color]="brand.primaryColor"></span>
                <span class="h-2.5 w-2.5 rotate-45 border" [style.border-color]="brand.accentColor" [style.background-color]="brand.primaryColor"></span>
                <span class="h-px flex-1" [style.background-color]="brand.primaryColor"></span>
              </div>
              <p class="mt-6 text-[13px] uppercase tracking-[0.3em]" [style.font-family]="brand.fontHeading">Gathering the responses</p>
              <p class="mx-auto mt-3 max-w-[44ch] text-[14px] leading-7" [style.color]="brand.neutralColor">
                Aggregating every submitted questionnaire for this subject. It takes a moment.
              </p>
            </div>

          } @else {
            <!-- ===== Subject header ===== -->
            <div class="px-6 pt-8 text-center sm:px-10">
              <div class="flex justify-center">
                <ui-avatar [name]="selected().name"></ui-avatar>
              </div>
              <h2 class="mt-4 text-[22px] uppercase tracking-[0.22em] sm:text-[26px]" [style.font-family]="brand.fontHeading">{{ selected().name }}</h2>
              <p class="mt-2 text-[14px]" [style.color]="brand.neutralColor">
                {{ selected().title }} &middot; reports to {{ selected().managerName }}
              </p>
              <p class="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[12px] uppercase tracking-[0.22em]">
                <span>{{ selected().cycleName }}</span>
                <span aria-hidden="true" [style.color]="brand.accentColor">&loz;</span>
                <span style="font-variant-numeric: tabular-nums;">{{ selected().period }}</span>
                @if (selected().cycleStatus === 'active') {
                  <span uiBadge variant="success">Cycle active</span>
                } @else {
                  <span uiBadge variant="secondary">Cycle closed</span>
                }
              </p>

              <div class="mt-7 flex items-center justify-center gap-4" aria-hidden="true">
                <span class="h-px flex-1" [style.background-color]="brand.accentColor"></span>
                <span class="h-2 w-2 rotate-45" [style.background-color]="brand.primaryColor"></span>
                <span class="h-px flex-1" [style.background-color]="brand.accentColor"></span>
              </div>
            </div>

            <!-- ===== Stale notice ===== -->
            @if (selected().stale && !refreshed()) {
              <div class="mx-6 mt-6 flex flex-col gap-3 px-4 py-3 sm:mx-10 sm:flex-row sm:items-center sm:justify-between"
                   [style.border]="'1px solid ' + tint(brand.neutralColor, 0.5)"
                   [style.background-color]="tint(brand.neutralColor, 0.1)">
                <p class="flex items-start gap-2 text-[13px] leading-6">
                  <ui-icon name="Clock" class="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true"></ui-icon>
                  <span>Figures drawn at <span style="font-variant-numeric: tabular-nums;">{{ generatedAt() }}</span>. Anything submitted since is not counted yet.</span>
                </p>
                <button uiButton variant="secondary" size="sm" class="gz-focus shrink-0" (click)="refresh()">Redraw figures</button>
              </div>
            }
            @if (refreshed()) {
              <p class="mx-6 mt-6 px-4 py-3 text-[13px] leading-6 sm:mx-10"
                 [style.border]="'1px solid ' + tint(brand.accentColor, 0.8)"
                 [style.background-color]="tint(brand.accentColor, 0.18)">
                Redrawn at <span style="font-variant-numeric: tabular-nums;">{{ generatedAt() }}</span>. {{ refreshNote() }}
              </p>
            }

            @if (withheld()) {
              <!-- ===== Withheld below threshold ===== -->
              <div class="gz-rise px-6 py-16 text-center sm:px-14">
                <span class="mx-auto flex h-14 w-14 rotate-45 items-center justify-center border"
                      [style.border-color]="brand.accentColor" aria-hidden="true">
                  <span class="h-7 w-7 border" [style.border-color]="brand.primaryColor"></span>
                </span>
                <h3 class="mt-7 text-[19px] uppercase tracking-[0.24em]" [style.font-family]="brand.fontHeading">Too few responses to show</h3>
                <p class="mx-auto mt-4 max-w-[56ch] text-[15px] leading-7">
                  <span style="font-variant-numeric: tabular-nums;">{{ selected().submitted }}</span> of
                  <span style="font-variant-numeric: tabular-nums;">{{ selected().assigned }}</span> assigned reviewers have submitted for {{ selected().name }}.
                  This cycle needs <span style="font-variant-numeric: tabular-nums;">{{ selected().threshold }}</span> before any result is shown, so that no single answer can be traced back to the person who wrote it.
                </p>
                <p class="mx-auto mt-3 max-w-[56ch] text-[14px] leading-7" [style.color]="brand.neutralColor">
                  The report opens on its own as soon as the {{ ordinal(selected().threshold) }} response arrives. People&nbsp;Ops can nudge the outstanding reviewers from the cycle workspace.
                </p>
                <button uiButton variant="secondary" class="gz-focus mt-8" (click)="navigate('cycle')">Open cycle workspace</button>
              </div>

            } @else {
              <!-- ===== Report ===== -->
              <div class="mt-7 grid grid-cols-1 gap-px sm:grid-cols-3"
                   [style.background-color]="hairline()"
                   [style.border-top]="'1px solid ' + hairline()"
                   [style.border-bottom]="'1px solid ' + hairline()">
                <div class="px-6 py-5" [style.background-color]="surface()" style="font-variant-numeric: tabular-nums;">
                  <ui-stat label="Responses received" [value]="selected().submitted + ' of ' + selected().assigned" hint="Reviewers who submitted"></ui-stat>
                </div>
                <div class="px-6 py-5" [style.background-color]="surface()" style="font-variant-numeric: tabular-nums;">
                  <ui-stat label="Overall average" [value]="overall() + ' / 5'" hint="Mean of all rating scales"></ui-stat>
                </div>
                <div class="px-6 py-5" [style.background-color]="surface()" style="font-variant-numeric: tabular-nums;">
                  <ui-stat label="Minimum reviewers" [value]="selected().threshold" hint="Threshold set for this cycle"></ui-stat>
                </div>
              </div>

              <div class="px-6 pt-7 sm:px-10">
                <ui-tabs [tabs]="tabList" [(value)]="tab"></ui-tabs>
              </div>

              <div class="px-6 pb-2 pt-7 sm:px-10">
                @switch (tab()) {

                  @case ('ratings') {
                    <div class="gz-rise">
                      <h3 class="text-[13px] uppercase tracking-[0.3em]" [style.font-family]="brand.fontHeading">Rating scales</h3>
                      <p class="mt-2 max-w-[66ch] text-[13px] leading-6" [style.color]="brand.neutralColor">
                        Each column from 1 to 5 holds the number of reviewers who chose that point on the scale. Averages are rounded to one decimal.
                      </p>

                      <div class="mt-5 overflow-x-auto">
                        <table uiTable class="w-full text-left" style="font-variant-numeric: tabular-nums;">
                          <caption class="sr-only">Average rating and spread of answers per competency, scale 1 to 5</caption>
                          <thead uiTHead>
                            <tr uiTR>
                              <th uiTH scope="col">Competency</th>
                              @for (p of scalePoints; track p) {
                                <th uiTH scope="col" class="text-center"><span class="sr-only">Rating </span>{{ p }}</th>
                              }
                              <th uiTH scope="col" class="text-center">Replies</th>
                              <th uiTH scope="col" class="text-right">Average</th>
                            </tr>
                          </thead>
                          <tbody uiTBody>
                            @for (q of selected().ratings; track q.text) {
                              <tr uiTR>
                                <td uiTD class="max-w-[22rem] text-[14px] leading-6">{{ q.text }}</td>
                                @for (c of q.dist; track $index) {
                                  <td uiTD class="text-center text-[13px]" [style.color]="c === 0 ? brand.neutralColor : brand.primaryColor">{{ c }}</td>
                                }
                                <td uiTD class="text-center text-[13px]">{{ total(q) }}</td>
                                <td uiTD class="text-right">
                                  <span class="block text-[17px]" [style.font-family]="brand.fontHeading">{{ avg(q) }}</span>
                                  <span class="mt-1 block h-[5px] w-20" [style.background-color]="tint(brand.neutralColor, 0.25)" aria-hidden="true">
                                    <span class="gz-bar block h-full" [style.width]="barWidth(q)" [style.background-color]="brand.accentColor"></span>
                                  </span>
                                </td>
                              </tr>
                            }
                          </tbody>
                        </table>
                      </div>

                      <div class="mt-10 flex items-center gap-4" aria-hidden="true">
                        <span class="h-px flex-1" [style.background-color]="brand.accentColor"></span>
                        <span class="h-2 w-2 rotate-45" [style.background-color]="brand.primaryColor"></span>
                        <span class="h-px flex-1" [style.background-color]="brand.accentColor"></span>
                      </div>

                      <h3 class="mt-8 text-[13px] uppercase tracking-[0.3em]" [style.font-family]="brand.fontHeading">By relationship</h3>
                      <p class="mt-2 max-w-[66ch] text-[13px] leading-6" [style.color]="brand.neutralColor">
                        A group is only shown once it reaches the cycle threshold of {{ selected().threshold }} responses. Smaller groups stay closed, or a single answer would carry a name.
                      </p>
                      <div class="mt-5 overflow-x-auto">
                        <table uiTable class="w-full text-left" style="font-variant-numeric: tabular-nums;">
                          <caption class="sr-only">Average by reviewer relationship</caption>
                          <thead uiTHead>
                            <tr uiTR>
                              <th uiTH scope="col">Relationship</th>
                              <th uiTH scope="col" class="text-center">Submitted</th>
                              <th uiTH scope="col" class="text-right">Average</th>
                            </tr>
                          </thead>
                          <tbody uiTBody>
                            @for (g of selected().groups; track g.label) {
                              <tr uiTR>
                                <td uiTD class="text-[14px]">{{ g.label }}</td>
                                <td uiTD class="text-center text-[13px]">{{ g.n }}</td>
                                <td uiTD class="text-right">
                                  @if (g.n >= selected().threshold) {
                                    <span class="text-[16px]" [style.font-family]="brand.fontHeading">{{ g.avg }} / 5</span>
                                  } @else if (g.n === 0) {
                                    <span class="text-[13px]" [style.color]="brand.neutralColor">No responses</span>
                                  } @else {
                                    <span class="inline-flex items-center gap-2 text-[13px]" [style.color]="brand.neutralColor">
                                      <ui-icon name="AlertCircle" class="h-4 w-4" aria-hidden="true"></ui-icon>
                                      Withheld &mdash; under {{ selected().threshold }}
                                    </span>
                                  }
                                </td>
                              </tr>
                            }
                          </tbody>
                        </table>
                      </div>
                    </div>
                  }

                  @case ('comments') {
                    <div class="gz-rise">
                      <h3 class="text-[13px] uppercase tracking-[0.3em]" [style.font-family]="brand.fontHeading">Written feedback</h3>
                      <p class="mt-2 max-w-[66ch] text-[13px] leading-6" [style.color]="brand.neutralColor">
                        Comments are collated and shuffled, so they cannot be lined up against the rating columns or against each other.
                      </p>

                      @for (q of selected().openQuestions; track q.text) {
                        <section class="mt-8">
                          <h4 class="text-[15px] leading-6">{{ q.text }}</h4>
                          @if (q.answers.length) {
                            <ul role="list" class="mt-4 grid gap-4 sm:grid-cols-2">
                              @for (a of q.answers; track a) {
                                <li class="gz-rise p-[3px]" [style.border]="'1px solid ' + tint(brand.primaryColor, 0.35)">
                                  <div class="h-full px-5 py-4" [style.border]="'1px solid ' + brand.accentColor" [style.background-color]="surfaceAlt()">
                                    <p class="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em]" [style.color]="brand.neutralColor">
                                      <span class="h-1.5 w-1.5 rotate-45" [style.background-color]="brand.accentColor" aria-hidden="true"></span>
                                      Anonymous reviewer
                                    </p>
                                    <p class="mt-3 text-[14px] leading-7">{{ a }}</p>
                                  </div>
                                </li>
                              }
                            </ul>
                          } @else {
                            <div class="mt-4">
                              <ui-empty title="No written answers to this question"
                                        description="Every reviewer completed the rating scales and left the comment box empty. Open text is optional in this cycle, so there is nothing withheld here.">
                                <button uiButton variant="secondary" size="sm" class="gz-focus" (click)="tab.set('ratings')">Back to the rating scales</button>
                              </ui-empty>
                            </div>
                          }
                        </section>
                      }
                    </div>
                  }

                  @default {
                    <div class="gz-rise">
                      <h3 class="text-[13px] uppercase tracking-[0.3em]" [style.font-family]="brand.fontHeading">Privacy &amp; scope</h3>
                      <ul role="list" class="mt-5 space-y-4">
                        @for (p of privacyNotes; track p) {
                          <li class="flex gap-3 text-[14px] leading-7">
                            <ui-icon name="Check" class="mt-1 h-4 w-4 shrink-0" aria-hidden="true"></ui-icon>
                            <span>{{ p }}</span>
                          </li>
                        }
                      </ul>
                      <div class="mt-8 p-[3px]" [style.border]="'1px solid ' + tint(brand.primaryColor, 0.35)">
                        <div class="px-5 py-4" [style.border]="'1px solid ' + brand.accentColor" [style.background-color]="surfaceAlt()">
                          <h4 class="text-[12px] uppercase tracking-[0.28em]" [style.font-family]="brand.fontHeading">What reporting covers</h4>
                          <p class="mt-3 max-w-[64ch] text-[14px] leading-7">
                            This release gives per-employee aggregated reports and the cycle progress dashboard. There is no cross-organisation trend analysis and no benchmarking between teams &mdash; those are not part of version one.
                          </p>
                          <button uiButton variant="secondary" size="sm" class="gz-focus mt-4" (click)="navigate('cycle')">
                            See cycle progress instead
                          </button>
                        </div>
                      </div>
                    </div>
                  }
                }
              </div>
            }

            <!-- ===== Export ===== -->
            <div class="mt-10 px-6 pb-10 text-center sm:px-10">
              <div class="flex items-center justify-center gap-4" aria-hidden="true">
                <span class="h-px flex-1" [style.background-color]="brand.primaryColor"></span>
                <span class="h-2.5 w-2.5 rotate-45 border" [style.border-color]="brand.accentColor" [style.background-color]="brand.primaryColor"></span>
                <span class="h-px flex-1" [style.background-color]="brand.primaryColor"></span>
              </div>

              @if (notice()) {
                <div class="gz-rise mx-auto mt-6 max-w-xl px-5 py-4 text-left"
                     role="status" aria-live="polite"
                     [style.border]="'1px solid ' + (notice().kind === 'error' ? brand.primaryColor : tint(brand.accentColor, 0.9))"
                     [style.background-color]="notice().kind === 'error' ? tint(brand.neutralColor, 0.14) : tint(brand.accentColor, 0.2)">
                  <p class="flex items-start gap-2 text-[13px] uppercase tracking-[0.2em]">
                    <ui-icon [name]="notice().kind === 'success' ? 'CheckCircle' : 'AlertCircle'" class="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true"></ui-icon>
                    {{ notice().title }}
                  </p>
                  <p class="mt-2 text-[14px] leading-7">{{ notice().body }}</p>
                  @if (notice().kind === 'error') {
                    <button uiButton variant="secondary" size="sm" class="gz-focus mt-3" (click)="exportPdf()">Try the export again</button>
                  }
                </div>
              }

              <button uiButton size="lg" class="gz-focus mt-7 inline-flex items-center gap-3 px-8 uppercase tracking-[0.22em]"
                      [style.background-color]="brand.primaryColor"
                      [style.color]="brand.accentColor"
                      [style.opacity]="exporting() ? 0.72 : 1"
                      [disabled]="exporting()"
                      (click)="exportPdf()">
                <ui-icon name="Download" class="h-4 w-4" aria-hidden="true"></ui-icon>
                <span>{{ exporting() ? 'Setting the PDF' : 'Export report as PDF' }}</span>
              </button>

              <p class="mx-auto mt-4 max-w-[52ch] text-[12px] leading-6" [style.color]="brand.neutralColor">
                @if (withheld()) {
                  While results are withheld no file is produced &mdash; the PDF would say the same thing this page does.
                } @else {
                  The PDF carries the same aggregated figures and comments, and no reviewer identities.
                }
              </p>
            </div>
          }
        </div>
      </div>
    </section>
  </div>
</div>
`;

@Component({
  selector: "app-report-screen",
  imports: [...UI_KIT, FormsModule],
  template,
})
export default class Screen extends ScreenBase {
  scalePoints = [1, 2, 3, 4, 5];

  tabList = [
    { id: 'ratings', value: 'ratings', label: 'Rating scales' },
    { id: 'comments', value: 'comments', label: 'Written feedback' },
    { id: 'privacy', value: 'privacy', label: 'Privacy & scope' }
  ];

  roleOptions = [
    { value: 'hr', label: 'HR / People Ops — Susan Raya' },
    { value: 'manager', label: 'Manager — Anita Deshpande' },
    { value: 'employee', label: 'Employee — Priya Nair' }
  ];

  privacyNotes = [
    'Individual answers are never attributed. Reviewers are shown as "anonymous reviewer" everywhere, in the app and in the PDF.',
    'Nothing appears until the cycle threshold of submitted reviewers is met, and relationship groups under the threshold stay withheld so a single voice cannot be picked out.',
    'The report is open to three parties only: the subject, their current manager and People Ops. Every other attempt is refused and written to the audit log.',
    'Rating scales are shown as counts and averages, not as a list of responses in submission order.',
    'Employee records and feedback are personal data under the DPDP Act 2023 and are held on infrastructure in India.'
  ];

  tab = signal('ratings');
  query = signal('');
  role = signal('hr');
  selectedId = signal('e-priya');
  loading = signal(false);
  exporting = signal(false);
  notice = signal(null);
  refreshed = signal(false);
  refreshNote = signal('');
  generatedAt = signal('09:12 today');

  subjects = [
    {
      id: 'e-priya',
      name: 'Priya Nair',
      title: 'Product Design Lead',
      managerId: 'e-anita',
      managerName: 'Anita Deshpande',
      cycleName: 'H2 2026 leadership 360',
      cycleSlug: 'h2-2026',
      period: '1 Jul – 31 Dec 2026',
      cycleStatus: 'active',
      threshold: 4,
      submitted: 7,
      assigned: 9,
      stale: true,
      exportFails: false,
      ratings: [
        { text: 'Communicates clearly with colleagues and stakeholders', dist: [0, 0, 1, 2, 4] },
        { text: 'Delivers work to the standard the team relies on', dist: [0, 0, 2, 2, 3] },
        { text: 'Gives and receives feedback constructively', dist: [0, 0, 3, 2, 2] },
        { text: 'Takes ownership of problems outside their remit', dist: [0, 0, 0, 3, 4] },
        { text: 'Supports the growth of the people around them', dist: [0, 1, 1, 2, 3] }
      ],
      groups: [
        { label: 'Manager', n: 1, avg: '4.6' },
        { label: 'Peers', n: 4, avg: '4.1' },
        { label: 'Direct reports', n: 2, avg: '4.4' }
      ],
      openQuestions: [
        {
          text: 'What should Priya keep doing?',
          answers: [
            'Her design critiques are the most useful hour of my fortnight. She separates the idea from the person every single time.',
            'She writes the problem down before anyone opens Figma. Two projects this half were saved by that one habit.',
            'Kept the onboarding redesign moving while the roadmap shifted twice around her, and never passed the churn down to the team.',
            'Shares rough, early work in the open. It makes it safe for the rest of us to do the same.'
          ]
        },
        {
          text: 'What is one thing Priya could change next half?',
          answers: [
            'Hand over more of the small fixes. That queue has only one name on it and it is a risk for the team.',
            'Push back earlier when scope grows. She absorbs it quietly and then the dates slip at the end.',
            'I would like to see her present at the engineering forum, not only to the design group.'
          ]
        }
      ]
    },
    {
      id: 'e-rohan',
      name: 'Rohan Mehta',
      title: 'Backend Engineer, Payments',
      managerId: 'e-anita',
      managerName: 'Anita Deshpande',
      cycleName: 'H2 2026 leadership 360',
      cycleSlug: 'h2-2026',
      period: '1 Jul – 31 Dec 2026',
      cycleStatus: 'active',
      threshold: 4,
      submitted: 2,
      assigned: 6,
      stale: false,
      exportFails: false,
      ratings: [
        { text: 'Communicates clearly with colleagues and stakeholders', dist: [0, 0, 1, 1, 0] },
        { text: 'Delivers work to the standard the team relies on', dist: [0, 0, 0, 1, 1] },
        { text: 'Gives and receives feedback constructively', dist: [0, 0, 1, 1, 0] },
        { text: 'Takes ownership of problems outside their remit', dist: [0, 0, 0, 2, 0] },
        { text: 'Supports the growth of the people around them', dist: [0, 0, 1, 0, 1] }
      ],
      groups: [
        { label: 'Manager', n: 0, avg: '—' },
        { label: 'Peers', n: 2, avg: '4.0' },
        { label: 'Direct reports', n: 0, avg: '—' }
      ],
      openQuestions: [
        { text: 'What should Rohan keep doing?', answers: [] },
        { text: 'What is one thing Rohan could change next half?', answers: [] }
      ]
    },
    {
      id: 'e-anita',
      name: 'Anita Deshpande',
      title: 'Head of Engineering',
      managerId: 'e-vikram',
      managerName: 'Vikram Rao',
      cycleName: 'H2 2026 leadership 360',
      cycleSlug: 'h2-2026',
      period: '1 Jul – 31 Dec 2026',
      cycleStatus: 'active',
      threshold: 4,
      submitted: 6,
      assigned: 8,
      stale: false,
      exportFails: false,
      ratings: [
        { text: 'Communicates clearly with colleagues and stakeholders', dist: [0, 0, 1, 2, 3] },
        { text: 'Delivers work to the standard the team relies on', dist: [0, 1, 1, 3, 1] },
        { text: 'Gives and receives feedback constructively', dist: [0, 0, 1, 3, 2] },
        { text: 'Takes ownership of problems outside their remit', dist: [0, 0, 2, 2, 2] },
        { text: 'Supports the growth of the people around them', dist: [0, 1, 2, 2, 1] }
      ],
      groups: [
        { label: 'Manager', n: 1, avg: '4.2' },
        { label: 'Peers', n: 4, avg: '3.9' },
        { label: 'Direct reports', n: 1, avg: '4.0' }
      ],
      openQuestions: [
        { text: 'What should Anita keep doing?', answers: [] },
        { text: 'What is one thing Anita could change next half?', answers: [] }
      ]
    },
    {
      id: 'e-kavya',
      name: 'Kavya Iyer',
      title: 'Customer Success Manager',
      managerId: 'e-meera',
      managerName: 'Meera Pillai',
      cycleName: 'H1 2026 mid-year 360',
      cycleSlug: 'h1-2026',
      period: '1 Jan – 30 Jun 2026',
      cycleStatus: 'closed',
      threshold: 4,
      submitted: 5,
      assigned: 5,
      stale: false,
      exportFails: true,
      ratings: [
        { text: 'Communicates clearly with colleagues and stakeholders', dist: [0, 0, 2, 2, 1] },
        { text: 'Delivers work to the standard the team relies on', dist: [0, 0, 1, 2, 2] },
        { text: 'Gives and receives feedback constructively', dist: [0, 1, 1, 2, 1] },
        { text: 'Takes ownership of problems outside their remit', dist: [0, 0, 1, 3, 1] },
        { text: 'Supports the growth of the people around them', dist: [0, 1, 2, 1, 1] }
      ],
      groups: [
        { label: 'Manager', n: 1, avg: '3.6' },
        { label: 'Peers', n: 4, avg: '3.9' },
        { label: 'Direct reports', n: 0, avg: '—' }
      ],
      openQuestions: [
        {
          text: 'What should Kavya keep doing?',
          answers: [
            'She reads an escalation before she answers it. Two renewals this year turned on that patience.',
            'Writes the account history down so the rest of us are not guessing on a Monday morning.',
            'Holds the line with customers politely when a promise would be easier than the truth.'
          ]
        },
        {
          text: 'What is one thing Kavya could change next half?',
          answers: [
            'Bring engineering in sooner. By the time we hear about a bug the customer has already waited a week.',
            'Say no to the ad hoc reports. They eat the hours she needs for the top ten accounts.'
          ]
        }
      ]
    },
    {
      id: 'e-sameer',
      name: 'Sameer Khanna',
      title: 'Data Engineer, Platform',
      managerId: 'e-vikram',
      managerName: 'Vikram Rao',
      cycleName: 'H2 2026 leadership 360',
      cycleSlug: 'h2-2026',
      period: '1 Jul – 31 Dec 2026',
      cycleStatus: 'active',
      threshold: 4,
      submitted: 6,
      assigned: 7,
      stale: false,
      exportFails: false,
      ratings: [
        { text: 'Communicates clearly with colleagues and stakeholders', dist: [0, 0, 0, 3, 3] },
        { text: 'Delivers work to the standard the team relies on', dist: [0, 0, 0, 2, 4] },
        { text: 'Gives and receives feedback constructively', dist: [0, 0, 1, 2, 3] },
        { text: 'Takes ownership of problems outside their remit', dist: [0, 0, 1, 3, 2] },
        { text: 'Supports the growth of the people around them', dist: [0, 0, 0, 2, 4] }
      ],
      groups: [
        { label: 'Manager', n: 1, avg: '4.8' },
        { label: 'Peers', n: 4, avg: '4.5' },
        { label: 'Direct reports', n: 1, avg: '4.6' }
      ],
      openQuestions: [
        {
          text: 'What should Sameer keep doing?',
          answers: [
            'The pipeline runbook he wrote in August is why the on-call week stopped being frightening.',
            'Answers questions from analysts without a trace of impatience, however basic they are.'
          ]
        },
        {
          text: 'What is one thing Sameer could change next half?',
          answers: [
            'Write fewer one-off scripts and more shared tooling. Half of what he builds deserves a wider audience.'
          ]
        }
      ]
    }
  ];

  selected = computed(() => {
    const id = this.selectedId();
    return this.subjects.find((s) => s.id === id) || this.subjects[0];
  });

  rows = computed(() => {
    const q = this.query().trim().toLowerCase();
    const r = this.role();
    return this.subjects
      .filter((s) => !q || s.name.toLowerCase().indexOf(q) > -1 || s.title.toLowerCase().indexOf(q) > -1)
      .map((s) => ({
        id: s.id,
        name: s.name,
        title: s.title,
        submitted: s.submitted,
        assigned: s.assigned,
        state: !this.canView(s, r) ? 'restricted' : s.submitted < s.threshold ? 'withheld' : 'ready'
      }));
  });

  denied = computed(() => !this.canView(this.selected(), this.role()));

  withheld = computed(() => this.selected().submitted < this.selected().threshold);

  ownReportId = computed(() => {
    const r = this.role();
    if (r === 'employee') return 'e-priya';
    if (r === 'manager') return 'e-anita';
    return null;
  });

  deniedReason = computed(() => {
    const s = this.selected();
    if (this.role() === 'manager') {
      return s.name + ' is not in Anita Deshpande’s reporting line — they report to ' + s.managerName + ' — so this report stays closed to her.';
    }
    return 'You can open your own report only. ' + s.name + '’s results belong to ' + s.name + ', their manager and People Ops.';
  });

  overall = computed(() => {
    const qs = this.selected().ratings;
    let sum = 0;
    let n = 0;
    qs.forEach((q) => {
      const t = this.total(q);
      if (t > 0) {
        sum += this.rawAvg(q);
        n += 1;
      }
    });
    return n ? (sum / n).toFixed(1) : '—';
  });

  surface = computed(() => this.lighten(this.brand.backgroundColor, 0.62));
  surfaceAlt = computed(() => this.lighten(this.brand.backgroundColor, 0.26));
  hairline = computed(() => this.tint(this.brand.primaryColor, 0.16));

  canView(s, r) {
    if (!s) return false;
    if (r === 'hr') return true;
    if (r === 'manager') return s.managerId === 'e-anita' || s.id === 'e-anita';
    return s.id === 'e-priya';
  }

  setRole(value) {
    this.role.set(value);
    this.notice.set(null);
    this.tab.set('ratings');
  }

  selectSubject(id) {
    if (!id || id === this.selectedId()) return;
    this.notice.set(null);
    this.tab.set('ratings');
    this.refreshed.set(false);
    this.generatedAt.set('09:12 today');
    this.loading.set(true);
    this.selectedId.set(id);
    setTimeout(() => this.loading.set(false), 420);
  }

  refresh() {
    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false);
      this.generatedAt.set('11:04 today');
      this.refreshNote.set('No further responses have come in since the earlier draw.');
      this.refreshed.set(true);
    }, 500);
  }

  exportPdf() {
    const s = this.selected();
    if (this.withheld()) {
      this.notice.set({
        kind: 'blocked',
        title: 'No PDF produced',
        body: 'Results for ' + s.name + ' are withheld until ' + s.threshold + ' reviewers have submitted. Only ' + s.submitted + ' are in, so there is nothing to export yet.'
      });
      return;
    }
    this.notice.set(null);
    this.exporting.set(true);
    setTimeout(() => {
      this.exporting.set(false);
      if (s.exportFails) {
        this.notice.set({
          kind: 'error',
          title: 'The export did not finish',
          body: 'The PDF service stopped answering partway through ' + s.name + '’s report, so no file was saved. Nothing on this page has changed — try again, and tell People Ops if it fails twice.'
        });
      } else {
        this.notice.set({
          kind: 'success',
          title: 'PDF saved',
          body: this.fileName() + ' is in your downloads. It holds the same aggregated figures and comments, with no reviewer identities.'
        });
      }
    }, 900);
  }

  fileName() {
    const s = this.selected();
    return '360-report-' + s.name.toLowerCase().split(' ').join('-') + '-' + s.cycleSlug + '.pdf';
  }

  total(q) {
    return q.dist.reduce((a, b) => a + b, 0);
  }

  rawAvg(q) {
    const t = this.total(q);
    if (!t) return 0;
    let sum = 0;
    q.dist.forEach((c, i) => {
      sum += c * (i + 1);
    });
    return sum / t;
  }

  avg(q) {
    const t = this.total(q);
    return t ? this.rawAvg(q).toFixed(1) : '—';
  }

  barWidth(q) {
    const t = this.total(q);
    if (!t) return '0%';
    return Math.round(((this.rawAvg(q) - 1) / 4) * 100) + '%';
  }

  ordinal(n) {
    const words = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth'];
    return words[n - 1] || n + 'th';
  }

  toRgb(hex) {
    const h = String(hex || '').replace('#', '');
    const f = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
    return [parseInt(f.slice(0, 2), 16) || 0, parseInt(f.slice(2, 4), 16) || 0, parseInt(f.slice(4, 6), 16) || 0];
  }

  tint(hex, alpha) {
    const c = this.toRgb(hex);
    return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + alpha + ')';
  }

  lighten(hex, amount) {
    const c = this.toRgb(hex).map((v) => Math.round(v + (255 - v) * amount));
    return 'rgb(' + c[0] + ',' + c[1] + ',' + c[2] + ')';
  }
}
