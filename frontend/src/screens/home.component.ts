// @ts-nocheck -- generated from the approved design under its plain-JavaScript contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, signal, computed } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ScreenBase } from "@/lib/screen-base";
import { UI_KIT } from "@/lib/ui";
const template = `
<div class="min-h-screen w-full" [style.background-color]="brand.backgroundColor" [style.color]="brand.primaryColor" [style.font-family]="brand.fontBody">
  <div class="mx-auto w-full max-w-6xl px-4 sm:px-8 py-8 sm:py-12">

    <!-- utility strip -->
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        @if (loading()) {
          <span class="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em]" [style.color]="muted">
            <ui-icon name="Clock" class="h-3.5 w-3.5 animate-pulse motion-reduce:animate-none" aria-hidden="true"></ui-icon>
            Syncing from Mumbai…
          </span>
        } @else if (stale()) {
          <span class="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em]" [style.color]="muted">
            <ui-icon name="Clock" class="h-3.5 w-3.5" aria-hidden="true"></ui-icon>
            Figures as of {{ syncLabel() }}
          </span>
        } @else {
          <span class="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em]" [style.color]="muted">
            <ui-icon name="CheckCircle" class="h-3.5 w-3.5" aria-hidden="true"></ui-icon>
            Synced {{ syncLabel() }}
          </span>
        }
        <button uiButton variant="ghost" size="sm"
          class="rounded-none text-[11px] uppercase tracking-[0.22em] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          [style.outline-color]="brand.primaryColor" [disabled]="loading()" (click)="refresh()">
          Refresh
        </button>
      </div>

      <div class="relative flex items-center gap-4" (keydown.escape)="signOutOpen.set(false)">
        <span class="hidden sm:inline text-[11px] uppercase tracking-[0.22em]" [style.color]="muted">{{ user.email }}</span>
        <button uiButton variant="ghost" size="sm" type="button"
          class="rounded-none text-[11px] uppercase tracking-[0.22em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          [style.outline-color]="brand.primaryColor"
          [attr.aria-expanded]="signOutOpen()" (click)="signOutOpen.set(!signOutOpen())">
          Sign out
        </button>
        @if (signOutOpen()) {
          <div role="dialog" aria-label="Confirm sign out"
            class="absolute right-0 top-full z-30 mt-3 w-[19rem] border p-[3px] shadow-xl"
            [style.border-color]="brand.primaryColor" [style.background-color]="brand.backgroundColor">
            <div class="border p-5" [style.border-color]="gild">
              <h2 class="text-[13px] uppercase tracking-[0.22em]" [style.font-family]="brand.fontHeading">End this session?</h2>
              <p class="mt-3 text-[13px] leading-relaxed" [style.color]="muted">
                Your two saved drafts stay exactly where they are. You will need your email and password to come back in.
              </p>
              <div class="mt-5 flex items-center gap-3">
                <button uiButton size="sm" type="button"
                  class="rounded-none uppercase tracking-[0.18em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  [style.background-color]="brand.primaryColor" [style.color]="brand.accentColor" [style.outline-color]="brand.primaryColor"
                  (click)="navigate('sign-in')">
                  Sign out
                </button>
                <button uiButton variant="ghost" size="sm" type="button"
                  class="rounded-none uppercase tracking-[0.18em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  [style.outline-color]="brand.primaryColor" (click)="signOutOpen.set(false)">
                  Stay signed in
                </button>
              </div>
            </div>
          </div>
        }
      </div>
    </div>

    <!-- title block -->
    <header class="mt-10 text-center">
      <p class="text-[11px] uppercase tracking-[0.38em]" [style.color]="muted">Quorq People Office · Tuesday 3 November 2026</p>
      <h1 class="mt-4 text-[34px] sm:text-[44px] leading-none uppercase tracking-[0.3em]" [style.font-family]="brand.fontHeading">Home</h1>

      <div class="mx-auto mt-6 flex max-w-xl items-center gap-4" aria-hidden="true">
        <span class="h-px flex-1" [style.background-color]="gild"></span>
        <span class="h-2 w-2 rotate-45 border" [style.border-color]="gild"></span>
        <span class="h-px flex-1" [style.background-color]="gild"></span>
      </div>
      <div class="mx-auto mt-[3px] max-w-xl h-px" [style.background-color]="hairline" aria-hidden="true"></div>

      <p class="mt-6 text-[13px] uppercase tracking-[0.26em]">{{ user.name }} · {{ user.title }}</p>
      <p class="mt-2 text-[13px]" [style.color]="muted">Review season H2 2026 closes Friday 14 November.</p>
    </header>

    <!-- privacy notice -->
    <section aria-labelledby="privacy-h" class="mt-10">
      @if (!ack()) {
        <div class="border p-[3px]" [style.border-color]="brand.primaryColor">
          <div class="border p-6 sm:p-8" [style.border-color]="gild" [style.background-color]="surface">
            <p class="text-[11px] uppercase tracking-[0.32em]" [style.color]="muted">Required before you continue</p>
            <h2 id="privacy-h" class="mt-3 text-[22px] uppercase tracking-[0.2em]" [style.font-family]="brand.fontHeading">
              Privacy notice {{ noticeVersion }}
            </h2>
            <p class="mt-3 max-w-2xl text-[14px] leading-relaxed" [style.color]="muted">
              Updated 28 October 2026 under India&rsquo;s Digital Personal Data Protection Act, 2023. Read it once, acknowledge it once.
            </p>

            <dl class="mt-6 grid gap-5 sm:grid-cols-2 max-w-4xl text-[14px] leading-relaxed">
              <div>
                <dt class="text-[11px] uppercase tracking-[0.22em]" [style.color]="muted">What we hold</dt>
                <dd class="mt-1">Your name, work email, reporting line, and the feedback you give and receive.</dd>
              </div>
              <div>
                <dt class="text-[11px] uppercase tracking-[0.22em]" [style.color]="muted">Why we hold it</dt>
                <dd class="mt-1">To run 360&deg; review cycles and produce aggregated reports for you, your manager and the People Office.</dd>
              </div>
              <div>
                <dt class="text-[11px] uppercase tracking-[0.22em]" [style.color]="muted">Where it lives</dt>
                <dd class="mt-1">On infrastructure located in India &mdash; Mumbai, region ap-south-1. Employee records and feedback do not leave the country.</dd>
              </div>
              <div>
                <dt class="text-[11px] uppercase tracking-[0.22em]" [style.color]="muted">Your rights</dt>
                <dd class="mt-1">Ask for access, correction or erasure of your data by writing to the People Office at people&#64;quorq.ai.</dd>
              </div>
            </dl>

            <div class="mt-7 flex flex-wrap items-center gap-4">
              <button uiButton size="lg" type="button"
                class="rounded-none uppercase tracking-[0.2em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                [style.background-color]="brand.primaryColor" [style.color]="brand.accentColor" [style.outline-color]="brand.primaryColor"
                (click)="acknowledge()">
                I acknowledge this notice
              </button>
              <span class="text-[12px]" [style.color]="muted">We record the version and the moment you acknowledge it.</span>
            </div>
          </div>
        </div>
      } @else {
        <div class="border px-5 py-4 transition-opacity duration-300 motion-reduce:transition-none"
          [style.border-color]="hairline">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <p class="flex items-center gap-3 text-[13px]">
              <ui-icon name="CheckCircle" class="h-4 w-4 shrink-0" aria-hidden="true"></ui-icon>
              <span>
                <span class="sr-only">Acknowledged. </span>
                You acknowledged privacy notice {{ noticeVersion }} on {{ ackAt() }}. Acknowledgement recorded.
              </span>
            </p>
            <button uiButton variant="ghost" size="sm" type="button"
              class="rounded-none text-[11px] uppercase tracking-[0.22em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              [style.outline-color]="brand.primaryColor"
              [attr.aria-expanded]="noticeOpen()" (click)="noticeOpen.set(!noticeOpen())">
              {{ noticeOpen() ? 'Hide the notice' : 'Read it again' }}
            </button>
          </div>
          <div class="overflow-hidden transition-all duration-300 motion-reduce:transition-none"
            [style.max-height]="noticeOpen() ? '26rem' : '0'" [style.opacity]="noticeOpen() ? '1' : '0'">
            <h2 id="privacy-h" class="sr-only">Privacy notice {{ noticeVersion }}</h2>
            <ul class="mt-4 space-y-2 border-t pt-4 text-[14px] leading-relaxed" [style.border-color]="hairline">
              <li>We hold your name, work email, reporting line, and the feedback you give and receive.</li>
              <li>We use it to run 360&deg; review cycles and produce aggregated reports for you, your manager and the People Office.</li>
              <li>Everything is stored on infrastructure located in India &mdash; Mumbai, region ap-south-1.</li>
              <li>For access, correction or erasure, write to the People Office at people&#64;quorq.ai.</li>
            </ul>
          </div>
        </div>
      }
    </section>

    <!-- metrics -->
    <section aria-label="Your season at a glance" class="mt-10 grid gap-5 sm:grid-cols-3">
      @for (m of metrics(); track m.label) {
        <div class="border p-[3px]" [style.border-color]="hairline">
          <div class="border px-5 py-6 text-center" [style.border-color]="gild" [style.background-color]="surface">
            <p class="text-[11px] uppercase tracking-[0.26em]" [style.color]="muted">{{ m.label }}</p>
            <p class="mt-3 text-[34px] leading-none tabular-nums" [style.font-family]="brand.fontHeading">{{ m.value }}</p>
            <div class="mx-auto mt-4 flex w-16 items-center gap-2" aria-hidden="true">
              <span class="h-px flex-1" [style.background-color]="gild"></span>
              <span class="h-1.5 w-1.5 rotate-45 border" [style.border-color]="gild"></span>
              <span class="h-px flex-1" [style.background-color]="gild"></span>
            </div>
            <p class="mt-4 text-[12px] leading-relaxed" [style.color]="muted">{{ m.hint }}</p>
          </div>
        </div>
      }
    </section>

    <!-- focal: queue -->
    <section aria-labelledby="queue-h" class="mt-10">
      <div class="border p-[3px]" [style.border-color]="brand.primaryColor">
        <div class="border p-6 sm:p-8" [style.border-color]="gild" [style.background-color]="surface">

          <div class="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p class="text-[11px] uppercase tracking-[0.32em]" [style.color]="muted">Your queue</p>
              <h2 id="queue-h" class="mt-3 text-[26px] uppercase tracking-[0.2em]" [style.font-family]="brand.fontHeading">
                Feedback waiting on you
              </h2>
              <p class="mt-3 max-w-xl text-[14px] leading-relaxed" [style.color]="muted">
                {{ outstandingCount() }} colleagues are waiting on your answers. The Design Guild Pulse closes first, on Monday 9 November.
              </p>
            </div>
            <button uiButton size="lg" type="button"
              class="rounded-none uppercase tracking-[0.2em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              [style.background-color]="brand.primaryColor" [style.color]="brand.accentColor" [style.outline-color]="brand.primaryColor"
              (click)="navigate('feedback-form')">
              Give feedback
              <ui-icon name="ArrowRight" class="ml-2 h-4 w-4" aria-hidden="true"></ui-icon>
            </button>
          </div>

          <div class="mt-7 flex items-center gap-4" aria-hidden="true">
            <span class="h-px flex-1" [style.background-color]="gild"></span>
            <span class="h-2 w-2 rotate-45 border" [style.border-color]="gild"></span>
            <span class="h-px flex-1" [style.background-color]="gild"></span>
          </div>

          @if (refreshError()) {
            <div class="mt-6 border p-[3px]" [style.border-color]="brand.primaryColor">
              <div class="flex flex-wrap items-center justify-between gap-4 border px-5 py-4" [style.border-color]="gild">
                <p class="flex items-start gap-3 text-[13px] leading-relaxed">
                  <ui-icon name="AlertCircle" class="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true"></ui-icon>
                  <span>{{ refreshError() }}</span>
                </p>
                <button uiButton variant="secondary" size="sm" type="button"
                  class="rounded-none uppercase tracking-[0.18em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  [style.outline-color]="brand.primaryColor" (click)="refresh()">
                  Try again
                </button>
              </div>
            </div>
          }

          <div class="mt-6 flex flex-wrap items-end justify-between gap-5">
            <ui-tabs [tabs]="tabList()" [(value)]="tab"></ui-tabs>
            <div class="w-full sm:w-72">
              <label uiLabel for="queue-search" class="text-[11px] uppercase tracking-[0.22em]" [style.color]="muted">
                Search your requests
              </label>
              <div class="relative mt-2">
                <ui-icon name="Search" class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" aria-hidden="true"></ui-icon>
                <input uiInput id="queue-search" type="search" [(ngModel)]="query" autocomplete="off"
                  class="w-full rounded-none pl-9 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  [style.border-color]="hairline" [style.outline-color]="brand.primaryColor"
                  placeholder="Colleague or cycle" />
              </div>
            </div>
          </div>

          <div class="mt-6">
            @if (loading()) {
              <ul class="space-y-3" aria-live="polite" aria-label="Loading your feedback requests">
                @for (s of [1,2,3]; track s) {
                  <li class="flex items-center gap-4 border px-4 py-5" [style.border-color]="hairline">
                    <span class="h-8 w-8 animate-pulse motion-reduce:animate-none" [style.background-color]="hairline"></span>
                    <span class="h-3 flex-1 animate-pulse motion-reduce:animate-none" [style.background-color]="hairline"></span>
                    <span class="hidden h-3 w-24 animate-pulse motion-reduce:animate-none sm:block" [style.background-color]="hairline"></span>
                  </li>
                }
              </ul>
            } @else if (visible().length === 0) {
              @if (query().trim()) {
                <ui-empty title="Nothing in your queue matches that"
                  [description]="'No request matches &ldquo;' + query().trim() + '&rdquo;. Try a colleague&rsquo;s name, or switch to another tab.'">
                  <button uiButton variant="secondary" type="button"
                    class="rounded-none uppercase tracking-[0.18em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    [style.outline-color]="brand.primaryColor" (click)="query.set('')">
                    Clear the search
                  </button>
                </ui-empty>
              } @else if (tab() === 'submitted') {
                <ui-empty title="You have not submitted anything yet"
                  description="Once you send your answers for a colleague, the submission appears here with its date.">
                  <button uiButton variant="secondary" type="button"
                    class="rounded-none uppercase tracking-[0.18em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    [style.outline-color]="brand.primaryColor" (click)="tab.set('outstanding')">
                    See what is outstanding
                  </button>
                </ui-empty>
              } @else {
                <ui-empty title="Your queue is clear"
                  description="No feedback is waiting on you in the current cycles. We will email you when the next one opens.">
                  <button uiButton variant="secondary" type="button"
                    class="rounded-none uppercase tracking-[0.18em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    [style.outline-color]="brand.primaryColor" (click)="tab.set('all')">
                    View everything assigned to me
                  </button>
                </ui-empty>
              }
            } @else {
              <div class="overflow-x-auto">
                <table uiTable class="w-full tabular-nums">
                  <caption class="sr-only">Feedback requests assigned to you, {{ visible().length }} shown</caption>
                  <thead uiTHead>
                    <tr uiTR [style.border-color]="hairline">
                      <th uiTH scope="col" class="text-[11px] uppercase tracking-[0.2em]">Subject</th>
                      <th uiTH scope="col" class="text-[11px] uppercase tracking-[0.2em]">Relationship</th>
                      <th uiTH scope="col" class="text-[11px] uppercase tracking-[0.2em]">Cycle</th>
                      <th uiTH scope="col" class="text-[11px] uppercase tracking-[0.2em]">Closes</th>
                      <th uiTH scope="col" class="text-[11px] uppercase tracking-[0.2em]">Status</th>
                      <th uiTH scope="col" class="text-right text-[11px] uppercase tracking-[0.2em]">Action</th>
                    </tr>
                  </thead>
                  <tbody uiTBody>
                    @for (r of visible(); track r.id) {
                      <tr uiTR class="group transition-colors duration-200 motion-reduce:transition-none" [style.border-color]="hairline">
                        <td uiTD class="relative">
                          <span class="absolute left-0 top-0 h-full w-[3px] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none"
                            [style.background-color]="gild" aria-hidden="true"></span>
                          <span class="flex items-center gap-3 pl-3">
                            <ui-avatar [name]="r.subject" class="h-8 w-8 shrink-0"></ui-avatar>
                            <span>
                              <span class="block text-[14px]">{{ r.subject }}</span>
                              <span class="block text-[12px]" [style.color]="muted">{{ r.detail }}</span>
                            </span>
                          </span>
                        </td>
                        <td uiTD class="text-[13px]">{{ r.relationship }}</td>
                        <td uiTD class="text-[13px]">{{ r.cycle }}</td>
                        <td uiTD class="text-[13px] whitespace-nowrap">{{ r.due }}</td>
                        <td uiTD>
                          @if (r.status === 'submitted') {
                            <span class="inline-flex items-center gap-1.5 border px-2.5 py-1 text-[11px] uppercase tracking-[0.16em]"
                              [style.border-color]="gild" [style.background-color]="gild" [style.color]="brand.primaryColor">
                              <ui-icon name="Check" class="h-3.5 w-3.5" aria-hidden="true"></ui-icon>Submitted
                            </span>
                          } @else if (r.status === 'draft') {
                            <span class="inline-flex items-center gap-1.5 border px-2.5 py-1 text-[11px] uppercase tracking-[0.16em]"
                              [style.border-color]="brand.primaryColor">
                              <ui-icon name="Clock" class="h-3.5 w-3.5" aria-hidden="true"></ui-icon>Draft saved
                            </span>
                          } @else {
                            <span class="inline-flex items-center gap-1.5 border px-2.5 py-1 text-[11px] uppercase tracking-[0.16em]"
                              [style.border-color]="hairline" [style.color]="muted">
                              <ui-icon name="AlertCircle" class="h-3.5 w-3.5" aria-hidden="true"></ui-icon>Not started
                            </span>
                          }
                        </td>
                        <td uiTD class="text-right">
                          @if (r.status === 'submitted') {
                            <button uiButton variant="ghost" size="sm" type="button" disabled
                              class="rounded-none text-[11px] uppercase tracking-[0.18em]"
                              [attr.aria-label]="'Feedback for ' + r.subject + ' already sent'">
                              Sent
                            </button>
                          } @else {
                            <button uiButton variant="secondary" size="sm" type="button"
                              class="rounded-none text-[11px] uppercase tracking-[0.18em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                              [style.outline-color]="brand.primaryColor"
                              [attr.aria-label]="(r.status === 'draft' ? 'Finish feedback for ' : 'Start feedback for ') + r.subject"
                              (click)="navigate('feedback-form')">
                              {{ r.status === 'draft' ? 'Finish' : 'Start' }}
                              <ui-icon name="ChevronRight" class="ml-1 h-3.5 w-3.5" aria-hidden="true"></ui-icon>
                            </button>
                          }
                        </td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
              <p class="mt-4 text-[12px]" [style.color]="muted">
                Showing {{ visible().length }} of {{ requests().length }} requests assigned to you. Your answers are never attributed to you by name.
              </p>
            }
          </div>
        </div>
      </div>
    </section>

    <!-- role preview -->
    <div class="mt-10 border px-5 py-4" [style.border-color]="hairline">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div class="flex flex-wrap items-center gap-3">
          <label uiLabel for="role-preview" class="text-[11px] uppercase tracking-[0.22em]" [style.color]="muted">
            Preview this home as
          </label>
          <select uiSelect id="role-preview" [ngModel]="viewAs()" (ngModelChange)="viewAs.set($event)"
            class="rounded-none text-[13px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            [style.border-color]="hairline" [style.outline-color]="brand.primaryColor">
            <option value="hr_admin">HR / Admin &mdash; my own role</option>
            <option value="manager">Manager</option>
            <option value="employee">Employee</option>
          </select>
        </div>
        @if (viewAs() !== 'hr_admin') {
          <p class="flex flex-wrap items-center gap-3 text-[12px]" [style.color]="muted">
            <span>Previewing the {{ roleLabel() }} home. You are still signed in as HR / Admin.</span>
            <button uiButton variant="ghost" size="sm" type="button"
              class="rounded-none text-[11px] uppercase tracking-[0.18em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              [style.outline-color]="brand.primaryColor" (click)="viewAs.set('hr_admin')">
              Back to my view
            </button>
          </p>
        } @else {
          <p class="text-[12px]" [style.color]="muted">As HR / Admin you can see every cycle, every directory record and every report.</p>
        }
      </div>
    </div>

    <!-- report + role section -->
    <div class="mt-6 grid gap-6 lg:grid-cols-3">

      <section aria-labelledby="report-h" class="lg:col-span-1">
        <div class="h-full border p-[3px]" [style.border-color]="gild">
          <div class="flex h-full flex-col border p-6" [style.border-color]="gild" [style.background-color]="brand.primaryColor" [style.color]="brand.backgroundColor">
            <p class="text-[11px] uppercase tracking-[0.3em]" [style.color]="gild">Yours alone</p>
            <h2 id="report-h" class="mt-3 text-[22px] uppercase tracking-[0.18em]" [style.font-family]="brand.fontHeading" [style.color]="brand.backgroundColor">
              Your 360&deg; report
            </h2>

            <div class="mt-6 flex items-baseline gap-3">
              <span class="text-[40px] leading-none tabular-nums" [style.font-family]="brand.fontHeading" [style.color]="gild">7 / 7</span>
              <span class="text-[12px] uppercase tracking-[0.18em]" [style.color]="gild">reviewers in</span>
            </div>

            <div class="mt-5 flex items-center gap-3" aria-hidden="true">
              <span class="h-px flex-1" [style.background-color]="gild"></span>
              <span class="h-1.5 w-1.5 rotate-45 border" [style.border-color]="gild"></span>
              <span class="h-px flex-1" [style.background-color]="gild"></span>
            </div>

            <dl class="mt-5 space-y-3 text-[13px] leading-relaxed">
              <div class="flex justify-between gap-4">
                <dt [style.color]="gild">Released</dt>
                <dd class="tabular-nums">H1 2026 &mdash; 2 Jun 2026</dd>
              </div>
              <div class="flex justify-between gap-4">
                <dt [style.color]="gild">Next</dt>
                <dd class="tabular-nums">H2 2026 &mdash; opens 21 Nov</dd>
              </div>
            </dl>

            <p class="mt-5 text-[12px] leading-relaxed" [style.color]="gild">
              Ratings are averaged and comments collated. No reviewer is ever named.
            </p>

            <div class="mt-auto pt-6">
              <button uiButton type="button"
                class="w-full rounded-none uppercase tracking-[0.2em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                [style.background-color]="brand.accentColor" [style.color]="brand.primaryColor" [style.outline-color]="brand.accentColor"
                (click)="navigate('report')">
                Open my report
              </button>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="role-h" class="lg:col-span-2">
        <div class="h-full border p-[3px]" [style.border-color]="hairline">
          <div class="h-full border p-6 sm:p-8" [style.border-color]="gild" [style.background-color]="surface">

            @switch (viewAs()) {

              @case ('hr_admin') {
                <div class="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p class="text-[11px] uppercase tracking-[0.3em]" [style.color]="muted">Administration</p>
                    <h2 id="role-h" class="mt-3 text-[22px] uppercase tracking-[0.18em]" [style.font-family]="brand.fontHeading">Feedback cycles</h2>
                  </div>
                  <div class="flex flex-wrap gap-3">
                    <button uiButton variant="secondary" size="sm" type="button"
                      class="rounded-none text-[11px] uppercase tracking-[0.18em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      [style.outline-color]="brand.primaryColor" (click)="navigate('employees')">
                      <ui-icon name="Users" class="mr-2 h-3.5 w-3.5" aria-hidden="true"></ui-icon>
                      Employee directory
                    </button>
                    <button uiButton variant="secondary" size="sm" type="button"
                      class="rounded-none text-[11px] uppercase tracking-[0.18em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      [style.outline-color]="brand.primaryColor" (click)="navigate('cycle')">
                      <ui-icon name="Plus" class="mr-2 h-3.5 w-3.5" aria-hidden="true"></ui-icon>
                      New cycle
                    </button>
                  </div>
                </div>

                <hr uiSeparator class="my-6" [style.border-color]="hairline" />

                <div class="overflow-x-auto">
                  <table uiTable class="w-full tabular-nums">
                    <caption class="sr-only">All feedback cycles with status and completion</caption>
                    <thead uiTHead>
                      <tr uiTR [style.border-color]="hairline">
                        <th uiTH scope="col" class="text-[11px] uppercase tracking-[0.2em]">Cycle</th>
                        <th uiTH scope="col" class="text-[11px] uppercase tracking-[0.2em]">Window</th>
                        <th uiTH scope="col" class="text-[11px] uppercase tracking-[0.2em]">Status</th>
                        <th uiTH scope="col" class="text-[11px] uppercase tracking-[0.2em]">Submitted</th>
                        <th uiTH scope="col" class="text-right text-[11px] uppercase tracking-[0.2em]">Action</th>
                      </tr>
                    </thead>
                    <tbody uiTBody>
                      @for (c of cycles(); track c.id) {
                        <tr uiTR class="group transition-colors duration-200 motion-reduce:transition-none" [style.border-color]="hairline">
                          <td uiTD class="relative">
                            <span class="absolute left-0 top-0 h-full w-[3px] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none"
                              [style.background-color]="gild" aria-hidden="true"></span>
                            <span class="block pl-3 text-[14px]">{{ c.name }}</span>
                            <span class="block pl-3 text-[12px]" [style.color]="muted">{{ c.period }}</span>
                          </td>
                          <td uiTD class="whitespace-nowrap text-[13px]">{{ c.window }}</td>
                          <td uiTD>
                            @if (c.status === 'active') {
                              <span class="inline-flex items-center gap-1.5 border px-2.5 py-1 text-[11px] uppercase tracking-[0.16em]"
                                [style.border-color]="gild" [style.background-color]="gild" [style.color]="brand.primaryColor">
                                <ui-icon name="Check" class="h-3.5 w-3.5" aria-hidden="true"></ui-icon>Active
                              </span>
                            } @else if (c.status === 'draft') {
                              <span class="inline-flex items-center gap-1.5 border px-2.5 py-1 text-[11px] uppercase tracking-[0.16em]"
                                [style.border-color]="brand.primaryColor">
                                <ui-icon name="Edit" class="h-3.5 w-3.5" aria-hidden="true"></ui-icon>Draft
                              </span>
                            } @else {
                              <span class="inline-flex items-center gap-1.5 border px-2.5 py-1 text-[11px] uppercase tracking-[0.16em]"
                                [style.border-color]="hairline" [style.color]="muted">
                                <ui-icon name="X" class="h-3.5 w-3.5" aria-hidden="true"></ui-icon>Closed
                              </span>
                            }
                          </td>
                          <td uiTD>
                            @if (c.status === 'draft') {
                              <span class="text-[13px]" [style.color]="muted">Not launched</span>
                            } @else {
                              <span class="block text-[13px] tabular-nums">{{ c.submitted }} of {{ c.total }} &middot; {{ c.pct }}%</span>
                              <span class="mt-2 block h-1.5 w-28 border" [style.border-color]="hairline" aria-hidden="true">
                                <span class="block h-full" [style.background-color]="gild" [style.width]="c.pct + '%'"></span>
                              </span>
                            }
                          </td>
                          <td uiTD class="text-right">
                            <button uiButton variant="ghost" size="sm" type="button"
                              class="rounded-none text-[11px] uppercase tracking-[0.18em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                              [style.outline-color]="brand.primaryColor"
                              [attr.aria-label]="'Open cycle ' + c.name" (click)="navigate('cycle')">
                              Open
                              <ui-icon name="ChevronRight" class="ml-1 h-3.5 w-3.5" aria-hidden="true"></ui-icon>
                            </button>
                          </td>
                        </tr>
                      }
                    </tbody>
                  </table>
                </div>
                <p class="mt-4 text-[12px]" [style.color]="muted">
                  Reporting in this version is per-employee aggregation and cycle progress only.
                </p>
              }

              @case ('manager') {
                <div>
                  <p class="text-[11px] uppercase tracking-[0.3em]" [style.color]="muted">Your reporting line</p>
                  <h2 id="role-h" class="mt-3 text-[22px] uppercase tracking-[0.18em]" [style.font-family]="brand.fontHeading">Your team&rsquo;s reports</h2>
                  <p class="mt-3 max-w-xl text-[14px] leading-relaxed" [style.color]="muted">
                    Only the three people who report to you appear here. Reports for anyone outside your line are not shown and cannot be opened.
                  </p>
                </div>

                <hr uiSeparator class="my-6" [style.border-color]="hairline" />

                <ul class="divide-y" [style.border-color]="hairline">
                  @for (t of team; track t.id) {
                    <li class="flex flex-wrap items-center justify-between gap-4 py-4 first:pt-0" [style.border-color]="hairline">
                      <div class="flex items-center gap-3">
                        <ui-avatar [name]="t.name" class="h-9 w-9 shrink-0"></ui-avatar>
                        <div>
                          <p class="text-[14px]">{{ t.name }}</p>
                          <p class="text-[12px] tabular-nums" [style.color]="muted">{{ t.role }} &middot; {{ t.submitted }} of {{ t.assigned }} reviewers in</p>
                        </div>
                      </div>
                      <div class="flex items-center gap-4">
                        @if (t.state === 'ready') {
                          <span class="inline-flex items-center gap-1.5 border px-2.5 py-1 text-[11px] uppercase tracking-[0.16em]"
                            [style.border-color]="gild" [style.background-color]="gild" [style.color]="brand.primaryColor">
                            <ui-icon name="Check" class="h-3.5 w-3.5" aria-hidden="true"></ui-icon>Report ready
                          </span>
                          <button uiButton variant="secondary" size="sm" type="button"
                            class="rounded-none text-[11px] uppercase tracking-[0.18em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                            [style.outline-color]="brand.primaryColor"
                            [attr.aria-label]="'Open the report for ' + t.name" (click)="navigate('report')">
                            Open report
                          </button>
                        } @else if (t.state === 'collecting') {
                          <span class="inline-flex items-center gap-1.5 border px-2.5 py-1 text-[11px] uppercase tracking-[0.16em]"
                            [style.border-color]="brand.primaryColor">
                            <ui-icon name="Clock" class="h-3.5 w-3.5" aria-hidden="true"></ui-icon>Collecting
                          </span>
                          <button uiButton variant="ghost" size="sm" type="button" disabled
                            class="rounded-none text-[11px] uppercase tracking-[0.18em]"
                            [attr.aria-label]="'Report for ' + t.name + ' is not available yet'">
                            Not yet
                          </button>
                        } @else {
                          <span class="inline-flex items-center gap-1.5 border px-2.5 py-1 text-[11px] uppercase tracking-[0.16em]"
                            [style.border-color]="hairline" [style.color]="muted">
                            <ui-icon name="AlertCircle" class="h-3.5 w-3.5" aria-hidden="true"></ui-icon>Below threshold
                          </span>
                          <button uiButton variant="ghost" size="sm" type="button" disabled
                            class="rounded-none text-[11px] uppercase tracking-[0.18em]"
                            [attr.aria-label]="'Report for ' + t.name + ' is withheld'">
                            Withheld
                          </button>
                        }
                      </div>
                    </li>
                  }
                </ul>
              }

              @default {
                <div class="text-center">
                  <p class="text-[11px] uppercase tracking-[0.3em]" [style.color]="muted">Beyond your access</p>
                  <h2 id="role-h" class="mt-3 text-[22px] uppercase tracking-[0.18em]" [style.font-family]="brand.fontHeading">
                    Cycle setup is kept with the People Office
                  </h2>

                  <div class="mx-auto mt-6 flex max-w-sm items-center gap-3" aria-hidden="true">
                    <span class="h-px flex-1" [style.background-color]="gild"></span>
                    <span class="h-2 w-2 rotate-45 border" [style.border-color]="gild"></span>
                    <span class="h-px flex-1" [style.background-color]="gild"></span>
                  </div>

                  <p class="mx-auto mt-6 max-w-lg text-[14px] leading-relaxed" [style.color]="muted">
                    As an employee you see your own queue and your own report. Feedback cycles, questionnaires, the employee directory
                    and other people&rsquo;s reports belong to HR / Admin.
                  </p>
                  <p class="mx-auto mt-4 max-w-lg text-[14px] leading-relaxed" [style.color]="muted">
                    Need a cycle changed or a reviewer swapped? Write to the People Office at people&#64;quorq.ai &mdash; Susan Raya answers within a working day.
                  </p>

                  <div class="mt-7">
                    <button uiButton variant="secondary" type="button"
                      class="rounded-none uppercase tracking-[0.18em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      [style.outline-color]="brand.primaryColor" (click)="navigate('report')">
                      View my own report instead
                    </button>
                  </div>
                </div>
              }
            }
          </div>
        </div>
      </section>
    </div>

    <!-- footer -->
    <footer class="mt-12 text-center">
      <div class="mx-auto flex max-w-2xl items-center gap-4" aria-hidden="true">
        <span class="h-px flex-1" [style.background-color]="hairline"></span>
        <span class="h-1.5 w-1.5 rotate-45 border" [style.border-color]="gild"></span>
        <span class="h-px flex-1" [style.background-color]="hairline"></span>
      </div>
      <p class="mt-5 text-[11px] uppercase tracking-[0.24em]" [style.color]="muted">
        Signed in as HR / Admin &middot; Privacy notice {{ noticeVersion }} &middot; Data stored in India &mdash; Mumbai, ap-south-1
      </p>
    </footer>

  </div>
</div>
`;

@Component({
  selector: "app-home-screen",
  imports: [...UI_KIT, FormsModule],
  template,
})
export default class Screen extends ScreenBase {
  user = {
    name: 'Susan Raya',
    email: 'susan.raya@quorq.ai',
    title: 'Head of People Operations',
    role: 'hr_admin'
  };

  noticeVersion = 'v2.3';

  ack = signal(false);
  ackAt = signal('');
  noticeOpen = signal(false);

  viewAs = signal('hr_admin');
  tab = signal('outstanding');
  query = signal('');

  loading = signal(false);
  stale = signal(true);
  syncLabel = signal('08:42 IST');
  refreshError = signal('');
  attempts = 0;

  signOutOpen = signal(false);

  requests = signal([
    { id: 'ra-4821', subject: 'Aarav Mehta', relationship: 'Direct report', cycle: 'H2 2026 · 360° Review', due: '14 Nov 2026', status: 'invited', detail: '9 questions · about 6 minutes' },
    { id: 'ra-4822', subject: 'Priya Nair', relationship: 'Peer', cycle: 'H2 2026 · 360° Review', due: '14 Nov 2026', status: 'draft', detail: '3 of 9 answered · saved 2 Nov' },
    { id: 'ra-4903', subject: 'Kabir Shah', relationship: 'Peer', cycle: 'Design Guild Pulse', due: '9 Nov 2026', status: 'invited', detail: '6 questions · closes Monday' },
    { id: 'ra-4845', subject: 'Rohan Fernandes', relationship: 'Peer', cycle: 'H2 2026 · 360° Review', due: '14 Nov 2026', status: 'draft', detail: '6 of 9 answered · saved 31 Oct' },
    { id: 'ra-4907', subject: 'Tanvi Desai', relationship: 'Direct report', cycle: 'Design Guild Pulse', due: '9 Nov 2026', status: 'invited', detail: '6 questions · about 4 minutes' },
    { id: 'ra-4810', subject: 'Devika Rao', relationship: 'Manager', cycle: 'H2 2026 · 360° Review', due: '14 Nov 2026', status: 'submitted', detail: 'Submitted 29 Oct 2026' },
    { id: 'ra-4834', subject: 'Lakshmi Iyer', relationship: 'Direct report', cycle: 'H2 2026 · 360° Review', due: '14 Nov 2026', status: 'submitted', detail: 'Submitted 1 Nov 2026' }
  ]);

  cycles = signal([
    { id: 'cy-19', name: 'H2 2026 · 360° Review', period: 'Jul–Dec 2026', window: '1 Oct – 14 Nov 2026', status: 'active', submitted: 112, total: 164, pct: 68 },
    { id: 'cy-21', name: 'Design Guild Pulse', period: 'Q4 2026', window: '20 Oct – 9 Nov 2026', status: 'active', submitted: 23, total: 56, pct: 41 },
    { id: 'cy-22', name: 'New Joiner 90-Day · Nov', period: 'Nov 2026', window: '18 Nov – 5 Dec 2026', status: 'draft', submitted: 0, total: 0, pct: 0 },
    { id: 'cy-14', name: 'H1 2026 · 360° Review', period: 'Jan–Jun 2026', window: '5 Apr – 22 May 2026', status: 'closed', submitted: 158, total: 164, pct: 96 },
    { id: 'cy-16', name: 'Engineering Ladder Calibration', period: 'Q3 2026', window: '1 Jul – 12 Aug 2026', status: 'closed', submitted: 71, total: 80, pct: 89 }
  ]);

  team = [
    { id: 'em-204', name: 'Aarav Mehta', role: 'Senior Engineer', submitted: 6, assigned: 6, state: 'ready' },
    { id: 'em-211', name: 'Lakshmi Iyer', role: 'Product Designer', submitted: 4, assigned: 6, state: 'collecting' },
    { id: 'em-233', name: 'Tanvi Desai', role: 'Associate Analyst', submitted: 2, assigned: 5, state: 'withheld' }
  ];

  get muted() {
    return 'color-mix(in srgb, ' + this.brand.primaryColor + ' 86%, ' + this.brand.backgroundColor + ')';
  }
  get hairline() {
    return 'color-mix(in srgb, ' + this.brand.primaryColor + ' 22%, ' + this.brand.backgroundColor + ')';
  }
  get gild() {
    return this.brand.accentColor;
  }
  get surface() {
    return 'color-mix(in srgb, ' + this.brand.backgroundColor + ' 70%, white)';
  }

  outstandingCount = computed(() => this.requests().filter((r) => r.status !== 'submitted').length);
  draftCount = computed(() => this.requests().filter((r) => r.status === 'draft').length);
  submittedCount = computed(() => this.requests().filter((r) => r.status === 'submitted').length);

  roleLabel = computed(() => {
    const v = this.viewAs();
    return v === 'hr_admin' ? 'HR / Admin' : v === 'manager' ? 'Manager' : 'Employee';
  });

  tabList = computed(() => [
    { value: 'outstanding', label: 'Outstanding · ' + this.outstandingCount() },
    { value: 'submitted', label: 'Submitted · ' + this.submittedCount() },
    { value: 'all', label: 'All · ' + this.requests().length }
  ]);

  visible = computed(() => {
    const q = (this.query() || '').toLowerCase().trim();
    const t = this.tab();
    return this.requests().filter((r) => {
      const inTab = t === 'all' ? true : t === 'submitted' ? r.status === 'submitted' : r.status !== 'submitted';
      const inQuery =
        !q ||
        r.subject.toLowerCase().includes(q) ||
        r.cycle.toLowerCase().includes(q) ||
        r.relationship.toLowerCase().includes(q);
      return inTab && inQuery;
    });
  });

  metrics = computed(() => {
    const waiting = {
      label: 'Waiting on you',
      value: String(this.outstandingCount()),
      hint: 'Earliest closes Monday 9 Nov 2026'
    };
    if (this.viewAs() === 'hr_admin') {
      return [
        waiting,
        { label: 'Cycles in flight', value: '2', hint: 'H2 2026 360° · Design Guild Pulse' },
        { label: 'Season completion', value: '63%', hint: '135 of 215 reviewers have submitted' }
      ];
    }
    if (this.viewAs() === 'manager') {
      return [
        waiting,
        { label: 'Team reports ready', value: '1 of 3', hint: 'Aarav Mehta released 2 Nov 2026' },
        { label: 'Below threshold', value: '1', hint: 'Tanvi Desai · 2 of 4 reviewers minimum' }
      ];
    }
    return [
      waiting,
      { label: 'Drafts saved', value: String(this.draftCount()), hint: 'Finish before Friday 14 Nov 2026' },
      { label: 'Your report', value: 'Ready', hint: 'H1 2026 · released 2 Jun 2026' }
    ];
  });

  acknowledge() {
    this.ack.set(true);
    this.ackAt.set('3 November 2026 at 09:41 IST');
    this.noticeOpen.set(false);
  }

  refresh() {
    if (this.loading()) return;
    this.loading.set(true);
    this.refreshError.set('');
    this.attempts = this.attempts + 1;
    const first = this.attempts === 1;
    setTimeout(() => {
      this.loading.set(false);
      if (first) {
        this.refreshError.set(
          'We could not reach the review service in Mumbai (ap-south-1). Nothing was lost — your drafts and the figures below are from ' +
            this.syncLabel() +
            '.'
        );
        return;
      }
      this.stale.set(false);
      this.syncLabel.set('just now');
    }, 900);
  }
}
