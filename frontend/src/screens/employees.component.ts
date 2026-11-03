// @ts-nocheck -- generated from the approved design under its plain-JavaScript contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, signal, computed } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ScreenBase } from "@/lib/screen-base";
import { UI_KIT } from "@/lib/ui";
const template = `
<div class="min-h-screen w-full"
     [style.background-color]="brand.backgroundColor"
     [style.color]="brand.primaryColor"
     [style.font-family]="brand.fontBody"
     [style.--deco-ink]="brand.primaryColor">

  <style>
    .deco-in{animation:decoIn 420ms cubic-bezier(.2,.7,.3,1) both}
    @keyframes decoIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}
    .deco-panel{animation:decoPanel 280ms ease-out both;transform-origin:top center}
    @keyframes decoPanel{from{opacity:0;transform:scaleY(.97)}to{opacity:1;transform:none}}
    .deco-focus:focus-visible{outline:2px solid var(--deco-ink);outline-offset:3px}
    .deco-pulse{animation:decoPulse 1.1s ease-in-out infinite}
    @keyframes decoPulse{0%,100%{opacity:.35}50%{opacity:1}}
    @media (prefers-reduced-motion:reduce){.deco-in,.deco-panel,.deco-pulse{animation:none}}
  </style>

  <div class="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-14">

    <!-- ============ HEADER ============ -->
    <header class="text-center">
      <p class="text-[11px] uppercase tracking-[0.42em]" [style.color]="muted">Quorq &middot; People Operations</p>
      <h1 class="mt-4 text-[32px] leading-tight md:text-[40px] font-semibold uppercase tracking-[0.22em]"
          [style.font-family]="brand.fontHeading">Employee Directory</h1>

      <div class="mx-auto mt-5 flex max-w-xl items-center justify-center gap-3" aria-hidden="true">
        <span class="h-px flex-1" [style.background-color]="brand.accentColor"></span>
        <span class="h-2 w-2 rotate-45" [style.background-color]="brand.primaryColor"></span>
        <span class="h-px flex-1" [style.background-color]="brand.accentColor"></span>
      </div>
      <div class="mx-auto mt-1 h-px max-w-xs" [style.background-color]="hair" aria-hidden="true"></div>

      <p class="mx-auto mt-6 max-w-[62ch] text-[15px] leading-relaxed" [style.color]="muted">
        Every record is kept here by hand. Quorq has no HRIS or payroll sync in v1 &mdash; what you enter on this page is
        the single source for sign-in, reporting lines and subject selection in a feedback cycle.
      </p>
    </header>

    <!-- ============ ROLE / SESSION STRIP ============ -->
    <div class="mt-10 flex flex-col gap-4 border-y py-4 md:flex-row md:items-center md:justify-between"
         [style.border-color]="hair">
      <p class="text-[11px] uppercase tracking-[0.26em]" [style.color]="muted">
        Session &middot; Susan Raya &middot; HR/admin &middot; susan.raya&#64;quorq.ai
      </p>
      <div class="flex items-center gap-3">
        <label uiLabel for="view-as" class="text-[11px] uppercase tracking-[0.22em] whitespace-nowrap" [style.color]="muted">Preview access as</label>
        <select uiSelect id="view-as" class="deco-focus h-10 min-w-[11rem] text-sm" [(ngModel)]="viewAs">
          <option value="hr">HR/admin</option>
          <option value="manager">Manager</option>
          <option value="employee">Employee</option>
        </select>
      </div>
    </div>

    <!-- ============ PERMISSION DENIED ============ -->
    @if (viewAs() !== 'hr') {
      <section class="deco-panel mx-auto mt-12 max-w-2xl p-[3px]" [style.border]="'1px solid ' + brand.primaryColor" aria-live="polite">
        <div class="bg-white px-8 py-12 text-center" [style.border]="'1px solid ' + brand.accentColor">
          <ui-icon name="AlertCircle" class="mx-auto h-6 w-6" aria-hidden="true"></ui-icon>
          <h2 class="mt-5 text-[20px] uppercase tracking-[0.2em]" [style.font-family]="brand.fontHeading">Directory is HR/admin only</h2>
          <div class="mx-auto mt-4 flex max-w-[16rem] items-center justify-center gap-3" aria-hidden="true">
            <span class="h-px flex-1" [style.background-color]="brand.accentColor"></span>
            <span class="h-1.5 w-1.5 rotate-45" [style.background-color]="brand.primaryColor"></span>
            <span class="h-px flex-1" [style.background-color]="brand.accentColor"></span>
          </div>
          <p class="mx-auto mt-5 max-w-[52ch] text-[15px] leading-relaxed" [style.color]="muted">{{ deniedCopy() }}</p>
          <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button uiButton class="deco-focus h-11 px-7 text-[12px] uppercase tracking-[0.26em]"
                    [style.background-color]="brand.primaryColor" [style.color]="brand.accentColor"
                    (click)="viewAs.set('hr')">Return to HR/admin view</button>
            <button uiButton variant="outline" class="deco-focus h-11 px-7 text-[12px] uppercase tracking-[0.22em]"
                    [style.border-color]="brand.primaryColor" (click)="navigate('home')">Go to home</button>
          </div>
        </div>
      </section>
    } @else {

    <!-- ============ STATS ============ -->
    <div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      @for (s of stats(); track s.label) {
        <div class="p-[3px]" [style.border]="'1px solid ' + hair">
          <div class="h-full bg-white px-5 py-4 tabular-nums" [style.border]="'1px solid ' + brand.accentColor">
            <ui-stat [label]="s.label" [value]="s.value" [hint]="s.hint"></ui-stat>
          </div>
        </div>
      }
    </div>

    <!-- ============ BANNER ============ -->
    @if (banner(); as b) {
      <div class="deco-in mt-6 flex flex-wrap items-center gap-3 border px-5 py-3"
           [style.border-color]="brand.accentColor" [style.background-color]="wash" role="status" aria-live="polite">
        <ui-icon name="CheckCircle" class="h-4 w-4 shrink-0" aria-hidden="true"></ui-icon>
        <p class="flex-1 text-sm leading-relaxed">{{ b.text }}</p>
        @if (b.undoId) {
          <button uiButton variant="outline" size="sm" class="deco-focus text-[11px] uppercase tracking-[0.2em]"
                  [style.border-color]="brand.primaryColor" (click)="undo(b.undoId)">Undo</button>
        }
        <button uiButton variant="ghost" size="sm" class="deco-focus" aria-label="Dismiss this message" (click)="banner.set(null)">
          <ui-icon name="X" class="h-4 w-4" aria-hidden="true"></ui-icon>
        </button>
      </div>
    }

    <!-- ============ STALE NOTICE ============ -->
    @if (stale()) {
      <div class="mt-4 flex flex-wrap items-center gap-3 border px-5 py-3" [style.border-color]="hair" [style.background-color]="shade">
        <ui-icon name="Clock" class="h-4 w-4 shrink-0" aria-hidden="true"></ui-icon>
        <p class="flex-1 text-sm leading-relaxed" [style.color]="muted">
          Showing the directory as it stood at <span class="tabular-nums">{{ lastSynced() }}</span>.
          Sneha Pillai saved two records after that; they are not on this page yet.
        </p>
        <button uiButton variant="outline" size="sm" class="deco-focus text-[11px] uppercase tracking-[0.2em]"
                [style.border-color]="brand.primaryColor" [disabled]="reloading()" (click)="reload()">
          @if (reloading()) { <span class="deco-pulse">Reloading&hellip;</span> } @else { <span>Reload directory</span> }
        </button>
      </div>
    }

    <!-- ============ TABS ============ -->
    <div class="mt-10">
      <ui-tabs [tabs]="tabs" [(value)]="tab"></ui-tabs>
    </div>

    @switch (tab()) {

      <!-- ---------- DIRECTORY ---------- -->
      @case ('directory') {
        <section class="mt-8" aria-label="Employee records">

          <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div class="grid flex-1 gap-4 sm:grid-cols-3">
              <div>
                <label uiLabel for="q" class="text-[11px] uppercase tracking-[0.22em]" [style.color]="muted">Search people</label>
                <input uiInput id="q" type="search" class="deco-focus mt-2 h-11 w-full text-sm"
                       placeholder="Name, work email or manager" [(ngModel)]="query">
              </div>
              <div>
                <label uiLabel for="role-filter" class="text-[11px] uppercase tracking-[0.22em]" [style.color]="muted">Role</label>
                <select uiSelect id="role-filter" class="deco-focus mt-2 h-11 w-full text-sm" [(ngModel)]="roleFilter">
                  <option value="all">All roles</option>
                  <option value="hr">HR/admin</option>
                  <option value="manager">Manager</option>
                  <option value="employee">Employee</option>
                </select>
              </div>
              <div>
                <label uiLabel for="status-filter" class="text-[11px] uppercase tracking-[0.22em]" [style.color]="muted">Status</label>
                <select uiSelect id="status-filter" class="deco-focus mt-2 h-11 w-full text-sm" [(ngModel)]="statusFilter">
                  <option value="all">All statuses</option>
                  <option value="active">Active</option>
                  <option value="inactive">Deactivated</option>
                  <option value="erased">Erased</option>
                </select>
              </div>
            </div>

            <button uiButton size="lg" class="deco-focus h-12 shrink-0 px-8 text-[12px] uppercase tracking-[0.28em]"
                    [style.background-color]="brand.primaryColor" [style.color]="brand.accentColor"
                    (click)="startAdd()">
              <ui-icon name="Plus" class="mr-2 h-4 w-4" aria-hidden="true"></ui-icon>
              Add employee
            </button>
          </div>

          <!-- form -->
          @if (showForm()) {
            <div class="deco-panel mt-8 p-[3px]" [style.border]="'1px solid ' + brand.primaryColor">
              <form class="bg-white px-6 py-7 md:px-10 md:py-9" [style.border]="'1px solid ' + brand.accentColor"
                    (ngSubmit)="saveEmployee()">
                <h2 class="text-center text-[17px] uppercase tracking-[0.24em]" [style.font-family]="brand.fontHeading">
                  {{ editingId() ? 'Edit record' : 'New employee record' }}
                </h2>
                <div class="mx-auto mt-3 flex max-w-[14rem] items-center justify-center gap-2" aria-hidden="true">
                  <span class="h-px flex-1" [style.background-color]="brand.accentColor"></span>
                  <span class="h-1.5 w-1.5 rotate-45" [style.background-color]="brand.primaryColor"></span>
                  <span class="h-px flex-1" [style.background-color]="brand.accentColor"></span>
                </div>

                @if (formError()) {
                  <div class="deco-in mt-6 flex items-start gap-3 border px-4 py-3" role="alert"
                       [style.border-color]="brand.primaryColor" [style.background-color]="shade">
                    <ui-icon name="AlertCircle" class="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true"></ui-icon>
                    <p class="text-sm leading-relaxed">{{ formError() }}</p>
                  </div>
                }

                <div class="mt-7 grid gap-6 md:grid-cols-2">
                  <div>
                    <label uiLabel for="f-name" class="text-[11px] uppercase tracking-[0.22em]" [style.color]="muted">Full name</label>
                    <input uiInput id="f-name" class="deco-focus mt-2 h-11 w-full text-sm" autocomplete="off"
                           placeholder="Rhea Menon" [(ngModel)]="fName" name="name">
                  </div>
                  <div>
                    <label uiLabel for="f-email" class="text-[11px] uppercase tracking-[0.22em]" [style.color]="muted">Work email</label>
                    <input uiInput id="f-email" type="email" class="deco-focus mt-2 h-11 w-full text-sm" autocomplete="off"
                           placeholder="rhea.menon&#64;quorq.ai" [(ngModel)]="fEmail" name="work_email">
                  </div>
                  <div>
                    <label uiLabel for="f-role" class="text-[11px] uppercase tracking-[0.22em]" [style.color]="muted">Role</label>
                    <select uiSelect id="f-role" class="deco-focus mt-2 h-11 w-full text-sm" [(ngModel)]="fRole" name="role">
                      <option value="employee">Employee</option>
                      <option value="manager">Manager</option>
                      <option value="hr">HR/admin</option>
                    </select>
                  </div>
                  <div>
                    <label uiLabel for="f-manager" class="text-[11px] uppercase tracking-[0.22em]" [style.color]="muted">Reports to</label>
                    <select uiSelect id="f-manager" class="deco-focus mt-2 h-11 w-full text-sm" [(ngModel)]="fManager" name="manager_id">
                      <option value="">No manager &mdash; top of the line</option>
                      @for (m of managerOptions(); track m.id) {
                        <option [value]="m.id">{{ m.name }} &mdash; {{ roleLabel(m.role) }}</option>
                      }
                    </select>
                  </div>
                  <div class="md:col-span-2 flex items-start gap-3 border-t pt-5" [style.border-color]="hair">
                    <input type="checkbox" uiCheckbox id="f-active" class="deco-focus mt-0.5" [(ngModel)]="fActive" name="is_active">
                    <label uiLabel for="f-active" class="text-sm leading-relaxed">
                      Active &mdash; can sign in and be selected as a subject or reviewer.
                      <span class="block text-[13px]" [style.color]="muted">Deactivating keeps all historical feedback intact.</span>
                    </label>
                  </div>
                </div>

                <div class="mt-8 flex flex-col-reverse items-center justify-center gap-3 sm:flex-row">
                  <button type="button" uiButton variant="outline" class="deco-focus h-11 px-7 text-[12px] uppercase tracking-[0.22em]"
                          [style.border-color]="brand.primaryColor" (click)="cancelForm()">Cancel</button>
                  <button type="submit" uiButton class="deco-focus h-11 px-8 text-[12px] uppercase tracking-[0.26em]"
                          [style.background-color]="brand.primaryColor" [style.color]="brand.accentColor" [disabled]="saving()">
                    @if (saving()) { <span class="deco-pulse">Saving record&hellip;</span> }
                    @else { <span>{{ editingId() ? 'Save changes' : 'Save employee' }}</span> }
                  </button>
                </div>
              </form>
            </div>
          }

          <!-- table -->
          <div class="mt-8 p-[3px]" [style.border]="'1px solid ' + hair">
            <div class="bg-white" [style.border]="'1px solid ' + brand.accentColor">

              @if (employees().length === 0) {
                <div class="px-6 py-14">
                  <ui-empty title="The directory is empty"
                            description="Add the first person at Quorq. Names, work emails and reporting lines all start here — there is no HRIS import to wait for.">
                    <button uiButton class="deco-focus h-11 px-7 text-[12px] uppercase tracking-[0.24em]"
                            [style.background-color]="brand.primaryColor" [style.color]="brand.accentColor"
                            (click)="startAdd()">Add the first employee</button>
                  </ui-empty>
                </div>
              } @else if (filtered().length === 0) {
                <div class="px-6 py-14">
                  <ui-empty title="No records match those filters"
                            description="Nobody in the directory matches that search and filter combination. Try a shorter search term, or widen the role and status filters.">
                    <button uiButton variant="outline" class="deco-focus h-11 px-7 text-[12px] uppercase tracking-[0.22em]"
                            [style.border-color]="brand.primaryColor" (click)="clearFilters()">Clear filters</button>
                  </ui-empty>
                </div>
              } @else {
                <div class="overflow-x-auto">
                  <table uiTable class="w-full min-w-[56rem] text-sm tabular-nums">
                    <thead uiTHead>
                      <tr uiTR>
                        <th uiTH scope="col" class="text-[11px] uppercase tracking-[0.2em]">Employee</th>
                        <th uiTH scope="col" class="text-[11px] uppercase tracking-[0.2em]">Work email</th>
                        <th uiTH scope="col" class="text-[11px] uppercase tracking-[0.2em]">Role</th>
                        <th uiTH scope="col" class="text-[11px] uppercase tracking-[0.2em]">Reports to</th>
                        <th uiTH scope="col" class="text-[11px] uppercase tracking-[0.2em]">Status</th>
                        <th uiTH scope="col" class="text-right text-[11px] uppercase tracking-[0.2em]">Actions</th>
                      </tr>
                    </thead>
                    <tbody uiTBody>
                      @for (e of filtered(); track e.id) {
                        <tr uiTR [class.deco-in]="isRecent(e.id)">
                          <td uiTD>
                            <div class="flex items-center gap-3">
                              @if (e.erased) {
                                <span class="flex h-8 w-8 items-center justify-center" [style.border]="'1px solid ' + hair" aria-hidden="true">
                                  <span class="h-2 w-2 rotate-45" [style.background-color]="brand.neutralColor"></span>
                                </span>
                                <span>
                                  <span class="italic" [style.color]="muted">Record erased</span>
                                  <span class="block text-[12px]" [style.color]="muted">Ref {{ e.ref }} &middot; {{ e.erased_on }}</span>
                                </span>
                              } @else {
                                <ui-avatar [name]="e.name"></ui-avatar>
                                <span>
                                  <span class="font-medium">{{ e.name }}</span>
                                  <span class="block text-[12px]" [style.color]="muted">Added {{ e.created_at }}</span>
                                </span>
                              }
                            </div>
                          </td>
                          <td uiTD [style.color]="e.erased ? muted : brand.primaryColor">{{ e.work_email }}</td>
                          <td uiTD>
                            <span class="text-[11px] uppercase tracking-[0.18em]">{{ roleLabel(e.role) }}</span>
                          </td>
                          <td uiTD [style.color]="muted">{{ managerName(e.manager_id) }}</td>
                          <td uiTD>
                            <span class="inline-flex items-center gap-1.5 border px-2.5 py-1 text-[11px] uppercase tracking-[0.16em]"
                                  [style.border-color]="e.erased ? hair : (e.is_active ? brand.accentColor : hair)"
                                  [style.background-color]="e.is_active && !e.erased ? wash : 'transparent'">
                              <ui-icon [name]="e.erased ? 'Trash' : (e.is_active ? 'Check' : 'X')" class="h-3 w-3" aria-hidden="true"></ui-icon>
                              {{ e.erased ? 'Erased' : (e.is_active ? 'Active' : 'Deactivated') }}
                            </span>
                          </td>
                          <td uiTD class="text-right">
                            @if (e.erased) {
                              <span class="text-[12px]" [style.color]="muted">Aggregated feedback retained</span>
                            } @else {
                              <div class="flex items-center justify-end gap-2">
                                <button uiButton variant="ghost" size="sm" class="deco-focus text-[11px] uppercase tracking-[0.18em]"
                                        [attr.aria-label]="'Edit the record for ' + e.name" (click)="startEdit(e)">
                                  <ui-icon name="Edit" class="mr-1.5 h-3.5 w-3.5" aria-hidden="true"></ui-icon>Edit
                                </button>
                                <button uiButton variant="outline" size="sm" class="deco-focus text-[11px] uppercase tracking-[0.18em]"
                                        [style.border-color]="hair"
                                        [attr.aria-label]="(e.is_active ? 'Deactivate ' : 'Reactivate ') + e.name"
                                        (click)="toggleActive(e)">
                                  {{ e.is_active ? 'Deactivate' : 'Reactivate' }}
                                </button>
                              </div>
                            }
                          </td>
                        </tr>
                      }
                    </tbody>
                  </table>
                </div>
              }
            </div>
          </div>

          <p class="mt-4 text-center text-[12px] uppercase tracking-[0.2em] tabular-nums" [style.color]="muted">
            Showing {{ filtered().length }} of {{ employees().length }} records
          </p>
        </section>
      }

      <!-- ---------- REPORTING LINES ---------- -->
      @case ('lines') {
        <section class="mt-8" aria-label="Reporting lines">

          <div class="mx-auto max-w-3xl p-[3px]" [style.border]="'1px solid ' + brand.primaryColor">
            <form class="bg-white px-6 py-7 md:px-10 md:py-9" [style.border]="'1px solid ' + brand.accentColor" (ngSubmit)="saveLine()">
              <h2 class="text-center text-[17px] uppercase tracking-[0.24em]" [style.font-family]="brand.fontHeading">Change a reporting line</h2>
              <p class="mx-auto mt-3 max-w-[54ch] text-center text-[14px] leading-relaxed" [style.color]="muted">
                A manager can open the aggregated report of anyone in their line, and Quorq uses the line to suggest peers,
                direct reports and managers as reviewers.
              </p>

              @if (rlError()) {
                <div class="deco-in mt-6 flex items-start gap-3 border px-4 py-3" role="alert"
                     [style.border-color]="brand.primaryColor" [style.background-color]="shade">
                  <ui-icon name="AlertCircle" class="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true"></ui-icon>
                  <p class="text-sm leading-relaxed">{{ rlError() }}</p>
                </div>
              }
              @if (rlSuccess()) {
                <div class="deco-in mt-6 flex items-start gap-3 border px-4 py-3" role="status"
                     [style.border-color]="brand.accentColor" [style.background-color]="wash">
                  <ui-icon name="CheckCircle" class="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true"></ui-icon>
                  <p class="text-sm leading-relaxed">{{ rlSuccess() }}</p>
                </div>
              }

              <div class="mt-7 grid gap-6 md:grid-cols-2">
                <div>
                  <label uiLabel for="rl-emp" class="text-[11px] uppercase tracking-[0.22em]" [style.color]="muted">Employee</label>
                  <select uiSelect id="rl-emp" class="deco-focus mt-2 h-11 w-full text-sm" [(ngModel)]="rlEmployee" name="rl_emp">
                    <option value="">Choose an employee</option>
                    @for (e of assignable(); track e.id) {
                      <option [value]="e.id">{{ e.name }}</option>
                    }
                  </select>
                </div>
                <div>
                  <label uiLabel for="rl-mgr" class="text-[11px] uppercase tracking-[0.22em]" [style.color]="muted">New manager</label>
                  <select uiSelect id="rl-mgr" class="deco-focus mt-2 h-11 w-full text-sm" [(ngModel)]="rlManager" name="rl_mgr">
                    <option value="">No manager &mdash; top of the line</option>
                    @for (m of assignable(); track m.id) {
                      <option [value]="m.id">{{ m.name }} &mdash; {{ roleLabel(m.role) }}</option>
                    }
                  </select>
                </div>
              </div>

              <div class="mt-8 text-center">
                <button type="submit" uiButton class="deco-focus h-11 px-8 text-[12px] uppercase tracking-[0.26em]"
                        [style.background-color]="brand.primaryColor" [style.color]="brand.accentColor">Save reporting line</button>
              </div>
            </form>
          </div>

          <h3 class="mt-12 text-center text-[13px] uppercase tracking-[0.3em]" [style.font-family]="brand.fontHeading">Current lines</h3>
          <div class="mx-auto mt-3 flex max-w-[12rem] items-center justify-center gap-2" aria-hidden="true">
            <span class="h-px flex-1" [style.background-color]="brand.accentColor"></span>
            <span class="h-1.5 w-1.5 rotate-45" [style.background-color]="brand.primaryColor"></span>
            <span class="h-px flex-1" [style.background-color]="brand.accentColor"></span>
          </div>

          <div class="mt-8 grid gap-5 md:grid-cols-2">
            @for (g of lines(); track g.manager.id) {
              <div class="p-[3px]" [style.border]="'1px solid ' + hair">
                <div class="h-full bg-white px-6 py-5" [style.border]="'1px solid ' + brand.accentColor">
                  <div class="flex items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <ui-avatar [name]="g.manager.name"></ui-avatar>
                      <div>
                        <p class="font-medium">{{ g.manager.name }}</p>
                        <p class="text-[12px]" [style.color]="muted">{{ roleLabel(g.manager.role) }} &middot; {{ g.manager.work_email }}</p>
                      </div>
                    </div>
                    <span class="shrink-0 text-[11px] uppercase tracking-[0.16em] tabular-nums" [style.color]="muted">
                      {{ g.reports.length }} direct
                    </span>
                  </div>
                  <ul class="mt-4 border-t" [style.border-color]="hair">
                    @for (r of g.reports; track r.id) {
                      <li class="flex items-center justify-between gap-3 border-b py-2.5 text-sm" [style.border-color]="hairSoft">
                        <span>{{ r.name }}</span>
                        <span class="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em]" [style.color]="muted">
                          <ui-icon [name]="r.is_active ? 'Check' : 'X'" class="h-3 w-3" aria-hidden="true"></ui-icon>
                          {{ r.is_active ? 'Active' : 'Deactivated' }}
                        </span>
                      </li>
                    }
                  </ul>
                </div>
              </div>
            }
          </div>

          @if (unassigned().length) {
            <div class="mx-auto mt-6 max-w-3xl border px-6 py-5" [style.border-color]="hair">
              <h4 class="text-[11px] uppercase tracking-[0.24em]" [style.color]="muted">No manager set</h4>
              <ul class="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                @for (u of unassigned(); track u.id) {
                  <li>{{ u.name }} <span class="text-[12px]" [style.color]="muted">&middot; {{ roleLabel(u.role) }}</span></li>
                }
              </ul>
            </div>
          }
        </section>
      }

      <!-- ---------- DATA RIGHTS ---------- -->
      @case ('rights') {
        <section class="mt-8" aria-label="Data rights requests">

          <div class="mx-auto max-w-3xl p-[3px]" [style.border]="'1px solid ' + brand.primaryColor">
            <form class="bg-white px-6 py-7 md:px-10 md:py-9" [style.border]="'1px solid ' + brand.accentColor" (ngSubmit)="logRequest()">
              <h2 class="text-center text-[17px] uppercase tracking-[0.24em]" [style.font-family]="brand.fontHeading">Record a rights request</h2>
              <p class="mx-auto mt-3 max-w-[56ch] text-center text-[14px] leading-relaxed" [style.color]="muted">
                Access, correction and erasure requests under the DPDP Act 2023 are routed to People Ops and actioned here.
                Every action is written to the audit log.
              </p>

              @if (drError()) {
                <div class="deco-in mt-6 flex items-start gap-3 border px-4 py-3" role="alert"
                     [style.border-color]="brand.primaryColor" [style.background-color]="shade">
                  <ui-icon name="AlertCircle" class="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true"></ui-icon>
                  <p class="text-sm leading-relaxed">{{ drError() }}</p>
                </div>
              }

              <div class="mt-7 grid gap-6 md:grid-cols-2">
                <div>
                  <label uiLabel for="dr-emp" class="text-[11px] uppercase tracking-[0.22em]" [style.color]="muted">Data principal</label>
                  <select uiSelect id="dr-emp" class="deco-focus mt-2 h-11 w-full text-sm" [(ngModel)]="drEmployee" name="dr_emp">
                    <option value="">Choose an employee</option>
                    @for (e of assignable(); track e.id) {
                      <option [value]="e.id">{{ e.name }}</option>
                    }
                  </select>
                </div>
                <div>
                  <label uiLabel for="dr-type" class="text-[11px] uppercase tracking-[0.22em]" [style.color]="muted">Request type</label>
                  <select uiSelect id="dr-type" class="deco-focus mt-2 h-11 w-full text-sm" [(ngModel)]="drType" name="dr_type">
                    <option value="access">Access &mdash; copy of their data</option>
                    <option value="correction">Correction &mdash; fix a detail</option>
                    <option value="erasure">Erasure &mdash; remove the record</option>
                  </select>
                </div>
                <div class="md:col-span-2">
                  <label uiLabel for="dr-notes" class="text-[11px] uppercase tracking-[0.22em]" [style.color]="muted">What was asked for</label>
                  <textarea uiTextarea id="dr-notes" rows="3" class="deco-focus mt-2 w-full text-sm"
                            placeholder="Raised by email on 3 Nov. Asks for a copy of the directory record and reviewer assignments."
                            [(ngModel)]="drNotes" name="dr_notes"></textarea>
                </div>
              </div>

              <div class="mt-8 text-center">
                <button type="submit" uiButton class="deco-focus h-11 px-8 text-[12px] uppercase tracking-[0.26em]"
                        [style.background-color]="brand.primaryColor" [style.color]="brand.accentColor">Log request</button>
              </div>
            </form>
          </div>

          @if (confirmErase(); as c) {
            <div class="deco-panel mx-auto mt-8 max-w-3xl p-[3px]" [style.border]="'1px solid ' + brand.primaryColor" role="group"
                 [attr.aria-label]="'Confirm erasure for ' + employeeName(c.employee_id)">
              <div class="bg-white px-6 py-6 md:px-9" [style.border]="'1px solid ' + brand.accentColor">
                <h3 class="flex items-center gap-2 text-[15px] uppercase tracking-[0.2em]" [style.font-family]="brand.fontHeading">
                  <ui-icon name="AlertCircle" class="h-4 w-4" aria-hidden="true"></ui-icon>
                  Erase {{ employeeName(c.employee_id) }}&rsquo;s record?
                </h3>
                <p class="mt-3 max-w-[64ch] text-sm leading-relaxed" [style.color]="muted">
                  Their name, work email and sign-in are removed for good and cannot be restored. Aggregated, anonymised
                  feedback stays in closed cycles, because it cannot re-identify anyone.
                </p>
                <div class="mt-6 flex flex-col-reverse gap-3 sm:flex-row">
                  <button uiButton variant="outline" class="deco-focus h-11 px-7 text-[12px] uppercase tracking-[0.22em]"
                          [style.border-color]="brand.primaryColor" (click)="confirmErase.set(null)">Keep the record</button>
                  <button uiButton class="deco-focus h-11 px-8 text-[12px] uppercase tracking-[0.24em]"
                          [style.background-color]="brand.primaryColor" [style.color]="brand.accentColor"
                          (click)="eraseNow(c)">Erase permanently</button>
                </div>
              </div>
            </div>
          }

          <div class="mt-8 p-[3px]" [style.border]="'1px solid ' + hair">
            <div class="bg-white" [style.border]="'1px solid ' + brand.accentColor">
              @if (requests().length === 0) {
                <div class="px-6 py-14">
                  <ui-empty title="No rights requests on file"
                            description="When someone at Quorq asks for a copy of their data, a correction, or erasure, log it above so the action and its date are on the record.">
                    <button uiButton variant="outline" class="deco-focus h-11 px-7 text-[12px] uppercase tracking-[0.22em]"
                            [style.border-color]="brand.primaryColor" (click)="focusRequestForm()">Record the first request</button>
                  </ui-empty>
                </div>
              } @else {
                <div class="overflow-x-auto">
                  <table uiTable class="w-full min-w-[58rem] text-sm tabular-nums">
                    <thead uiTHead>
                      <tr uiTR>
                        <th uiTH scope="col" class="text-[11px] uppercase tracking-[0.2em]">Data principal</th>
                        <th uiTH scope="col" class="text-[11px] uppercase tracking-[0.2em]">Type</th>
                        <th uiTH scope="col" class="text-[11px] uppercase tracking-[0.2em]">Raised</th>
                        <th uiTH scope="col" class="text-[11px] uppercase tracking-[0.2em]">Status</th>
                        <th uiTH scope="col" class="text-[11px] uppercase tracking-[0.2em]">Notes</th>
                        <th uiTH scope="col" class="text-right text-[11px] uppercase tracking-[0.2em]">Action</th>
                      </tr>
                    </thead>
                    <tbody uiTBody>
                      @for (r of requests(); track r.id) {
                        <tr uiTR [class.deco-in]="isRecent(r.id)">
                          <td uiTD>
                            <span class="font-medium">{{ employeeName(r.employee_id) }}</span>
                            <span class="block text-[12px]" [style.color]="muted">{{ r.id }}</span>
                          </td>
                          <td uiTD class="text-[11px] uppercase tracking-[0.18em]">{{ typeLabel(r.type) }}</td>
                          <td uiTD [style.color]="muted">{{ r.raised_at }}</td>
                          <td uiTD>
                            <span class="inline-flex items-center gap-1.5 border px-2.5 py-1 text-[11px] uppercase tracking-[0.16em]"
                                  [style.border-color]="r.status === 'actioned' ? brand.accentColor : hair"
                                  [style.background-color]="r.status === 'actioned' ? wash : 'transparent'">
                              <ui-icon [name]="r.status === 'actioned' ? 'CheckCircle' : (r.status === 'in_progress' ? 'Clock' : 'AlertCircle')"
                                       class="h-3 w-3" aria-hidden="true"></ui-icon>
                              {{ statusLabel(r.status) }}
                            </span>
                          </td>
                          <td uiTD class="max-w-[22rem] whitespace-normal leading-relaxed" [style.color]="muted">{{ r.notes }}</td>
                          <td uiTD class="text-right">
                            @if (r.status === 'actioned') {
                              <span class="text-[12px]" [style.color]="muted">{{ r.actioned_by }} &middot; {{ r.actioned_at }}</span>
                            } @else if (r.status === 'new') {
                              <button uiButton variant="outline" size="sm" class="deco-focus text-[11px] uppercase tracking-[0.18em]"
                                      [style.border-color]="hair"
                                      [attr.aria-label]="'Start work on request ' + r.id" (click)="startRequest(r)">Start</button>
                            } @else if (r.type === 'erasure') {
                              <button uiButton size="sm" class="deco-focus text-[11px] uppercase tracking-[0.18em]"
                                      [style.background-color]="brand.primaryColor" [style.color]="brand.accentColor"
                                      [attr.aria-label]="'Erase the record for ' + employeeName(r.employee_id)"
                                      (click)="confirmErase.set(r)">Erase record</button>
                            } @else {
                              <button uiButton variant="outline" size="sm" class="deco-focus text-[11px] uppercase tracking-[0.18em]"
                                      [style.border-color]="brand.primaryColor"
                                      [attr.aria-label]="'Mark request ' + r.id + ' as actioned'" (click)="markActioned(r)">Mark actioned</button>
                            }
                          </td>
                        </tr>
                      }
                    </tbody>
                  </table>
                </div>
              }
            </div>
          </div>
        </section>
      }
    }

    <!-- ============ FOOTNOTES ============ -->
    <hr uiSeparator class="mt-14" [style.border-color]="hair">
    <div class="mt-8 grid gap-5 md:grid-cols-3">
      <div class="border px-5 py-4" [style.border-color]="hair">
        <h3 class="text-[11px] uppercase tracking-[0.24em]" [style.font-family]="brand.fontHeading">Manual by design</h3>
        <p class="mt-2 text-[13px] leading-relaxed" [style.color]="muted">
          No HRIS or payroll import is offered in v1. Joiners, leavers and reporting lines are entered on this page.
        </p>
      </div>
      <div class="border px-5 py-4" [style.border-color]="hair">
        <h3 class="text-[11px] uppercase tracking-[0.24em]" [style.font-family]="brand.fontHeading">Adults only</h3>
        <p class="mt-2 text-[13px] leading-relaxed" [style.color]="muted">
          Every record is an employee aged 18 or over, so no parental-consent workflow applies under the DPDP Act.
        </p>
      </div>
      <div class="border px-5 py-4" [style.border-color]="hair">
        <h3 class="text-[11px] uppercase tracking-[0.24em]" [style.font-family]="brand.fontHeading">Next step</h3>
        <p class="mt-2 text-[13px] leading-relaxed" [style.color]="muted">
          Subjects and reviewers are chosen per cycle, not here.
        </p>
        <button uiButton variant="ghost" size="sm" class="deco-focus mt-2 px-0 text-[11px] uppercase tracking-[0.2em]"
                (click)="navigate('cycle')">
          Open cycle workspace <ui-icon name="ChevronRight" class="ml-1 h-3.5 w-3.5" aria-hidden="true"></ui-icon>
        </button>
      </div>
    </div>

    }
  </div>
</div>
`;

@Component({
  selector: "app-employees-screen",
  imports: [...UI_KIT, FormsModule],
  template,
})
export default class Screen extends ScreenBase {
  today = '3 Nov 2026';

  tabs = [
    { value: 'directory', label: 'Directory' },
    { value: 'lines', label: 'Reporting lines' },
    { value: 'rights', label: 'Data rights requests' }
  ];

  tab = signal('directory');
  viewAs = signal('hr');

  query = signal('');
  roleFilter = signal('all');
  statusFilter = signal('all');

  showForm = signal(false);
  editingId = signal(null);
  saving = signal(false);
  formError = signal(null);
  fName = signal('');
  fEmail = signal('');
  fRole = signal('employee');
  fManager = signal('');
  fActive = signal(true);

  banner = signal(null);
  stale = signal(true);
  reloading = signal(false);
  lastSynced = signal('09:42 IST');
  recent = signal([]);

  rlEmployee = signal('');
  rlManager = signal('');
  rlError = signal(null);
  rlSuccess = signal(null);

  drEmployee = signal('');
  drType = signal('access');
  drNotes = signal('');
  drError = signal(null);
  confirmErase = signal(null);

  seq = 16;
  reqSeq = 306;

  employees = signal([
    { id: 'e-002', name: 'Devika Nair', work_email: 'devika.nair@quorq.ai', role: 'manager', manager_id: null, is_active: true, created_at: '04 Jan 2024', erased: false },
    { id: 'e-001', name: 'Susan Raya', work_email: 'susan.raya@quorq.ai', role: 'hr', manager_id: 'e-002', is_active: true, created_at: '11 Feb 2024', erased: false },
    { id: 'e-003', name: 'Arjun Mehta', work_email: 'arjun.mehta@quorq.ai', role: 'manager', manager_id: 'e-002', is_active: true, created_at: '04 Jan 2024', erased: false },
    { id: 'e-007', name: 'Kabir Shah', work_email: 'kabir.shah@quorq.ai', role: 'manager', manager_id: 'e-002', is_active: true, created_at: '12 Feb 2024', erased: false },
    { id: 'e-012', name: 'Sneha Pillai', work_email: 'sneha.pillai@quorq.ai', role: 'hr', manager_id: 'e-002', is_active: true, created_at: '15 Jan 2025', erased: false },
    { id: 'e-004', name: 'Priya Venkatesan', work_email: 'priya.venkatesan@quorq.ai', role: 'employee', manager_id: 'e-003', is_active: true, created_at: '19 Mar 2024', erased: false },
    { id: 'e-005', name: 'Rohit Banerjee', work_email: 'rohit.banerjee@quorq.ai', role: 'employee', manager_id: 'e-003', is_active: true, created_at: '02 Apr 2024', erased: false },
    { id: 'e-011', name: 'Farhan Qureshi', work_email: 'farhan.qureshi@quorq.ai', role: 'employee', manager_id: 'e-003', is_active: true, created_at: '03 Sep 2025', erased: false },
    { id: 'e-014', name: 'Mei Lin Chua', work_email: 'meilin.chua@quorq.ai', role: 'employee', manager_id: 'e-003', is_active: true, created_at: '24 Feb 2026', erased: false },
    { id: 'e-008', name: 'Ananya Rao', work_email: 'ananya.rao@quorq.ai', role: 'employee', manager_id: 'e-007', is_active: true, created_at: '06 May 2025', erased: false },
    { id: 'e-009', name: 'Vikram Desai', work_email: 'vikram.desai@quorq.ai', role: 'employee', manager_id: 'e-007', is_active: true, created_at: '21 Jul 2025', erased: false },
    { id: 'e-013', name: 'Daniel Okafor', work_email: 'daniel.okafor@quorq.ai', role: 'employee', manager_id: 'e-007', is_active: true, created_at: '12 Jan 2026', erased: false },
    { id: 'e-006', name: 'Lakshmi Iyer', work_email: 'lakshmi.iyer@quorq.ai', role: 'employee', manager_id: 'e-003', is_active: false, created_at: '15 Aug 2023', erased: false },
    { id: 'e-015', name: 'Ishaan Gupta', work_email: 'ishaan.gupta@quorq.ai', role: 'employee', manager_id: 'e-007', is_active: false, created_at: '09 Jun 2024', erased: false },
    { id: 'e-010', name: 'Record erased', work_email: '—', role: 'employee', manager_id: 'e-007', is_active: false, created_at: '18 Nov 2024', erased: true, ref: 'ERS-118', erased_on: '28 Oct 2026' }
  ]);

  requests = signal([
    { id: 'dr-305', employee_id: 'e-014', type: 'erasure', status: 'in_progress', raised_at: '02 Nov 2026', actioned_by: 'Susan Raya', actioned_at: null, notes: 'Requested after resignation. Exit date confirmed by Arjun Mehta; ready to erase.' },
    { id: 'dr-303', employee_id: 'e-004', type: 'correction', status: 'new', raised_at: '01 Nov 2026', actioned_by: null, actioned_at: null, notes: 'Work email misspelt on the joining form. Asks for priya.v@ to be replaced with the full address.' },
    { id: 'dr-302', employee_id: 'e-009', type: 'access', status: 'in_progress', raised_at: '29 Oct 2026', actioned_by: 'Susan Raya', actioned_at: null, notes: 'Compiling the directory record plus the list of cycles he was a reviewer in. No reviewer identities included.' },
    { id: 'dr-301', employee_id: 'e-010', type: 'erasure', status: 'actioned', raised_at: '21 Oct 2026', actioned_by: 'Susan Raya', actioned_at: '28 Oct 2026', notes: 'Record erased after exit. Aggregated H2 results retained anonymously; no re-identification possible.' },
    { id: 'dr-304', employee_id: 'e-005', type: 'access', status: 'actioned', raised_at: '09 Oct 2026', actioned_by: 'Sneha Pillai', actioned_at: '14 Oct 2026', notes: 'Copy of the directory record and reporting history sent by email on 14 Oct.' }
  ]);

  /* ---------- colour roles derived from the brand tokens ---------- */
  tint(hex, alpha) {
    const h = String(hex).replace('#', '');
    const full = h.length === 3 ? h[0] + h[0] + h[1] + h[1] + h[2] + h[2] : h;
    const r = parseInt(full.slice(0, 2), 16);
    const g = parseInt(full.slice(2, 4), 16);
    const b = parseInt(full.slice(4, 6), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
  }
  get muted() { return this.tint(this.brand.primaryColor, 0.72); }
  get hair() { return this.tint(this.brand.primaryColor, 0.18); }
  get hairSoft() { return this.tint(this.brand.primaryColor, 0.1); }
  get wash() { return this.tint(this.brand.accentColor, 0.24); }
  get shade() { return this.tint(this.brand.accentColor, 0.12); }

  /* ---------- labels ---------- */
  roleLabel(role) {
    if (role === 'hr') return 'HR/admin';
    if (role === 'manager') return 'Manager';
    return 'Employee';
  }
  typeLabel(t) {
    if (t === 'access') return 'Access';
    if (t === 'correction') return 'Correction';
    return 'Erasure';
  }
  statusLabel(s) {
    if (s === 'new') return 'New';
    if (s === 'in_progress') return 'In progress';
    return 'Actioned';
  }
  find(id) { return this.employees().find(e => e.id === id) || null; }
  managerName(id) {
    const m = this.find(id);
    return m ? m.name : '—';
  }
  employeeName(id) {
    const e = this.find(id);
    return e ? e.name : 'Unknown record';
  }
  isRecent(id) { return this.recent().indexOf(id) !== -1; }

  deniedCopy = computed(() => {
    if (this.viewAs() === 'manager') {
      return 'You are previewing Quorq as a manager. Managers can open the aggregated report for people in their own reporting line and nothing else — the directory, reporting lines and rights requests stay with People Ops. Ask Susan Raya (susan.raya@quorq.ai) if your role needs changing.';
    }
    return 'You are previewing Quorq as an employee. Employees can give feedback and read their own report. Directory records, reporting lines and data-rights requests are handled by HR/admin — ask Susan Raya (susan.raya@quorq.ai) if you need a detail corrected.';
  });

  /* ---------- derived lists ---------- */
  assignable = computed(() => this.employees().filter(e => !e.erased && e.is_active));

  managerOptions = computed(() => {
    const id = this.editingId();
    return this.employees().filter(e => !e.erased && e.is_active && e.id !== id);
  });

  filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    const r = this.roleFilter();
    const s = this.statusFilter();
    return this.employees().filter(e => {
      const st = e.erased ? 'erased' : (e.is_active ? 'active' : 'inactive');
      const hit = !q
        || e.name.toLowerCase().indexOf(q) !== -1
        || e.work_email.toLowerCase().indexOf(q) !== -1
        || this.managerName(e.manager_id).toLowerCase().indexOf(q) !== -1;
      return hit && (r === 'all' || e.role === r) && (s === 'all' || s === st);
    });
  });

  stats = computed(() => {
    const all = this.employees();
    const active = all.filter(e => e.is_active && !e.erased).length;
    const managers = all.filter(e => e.role === 'manager' && e.is_active).length;
    const off = all.filter(e => !e.is_active && !e.erased).length;
    const open = this.requests().filter(r => r.status !== 'actioned').length;
    return [
      { label: 'Active records', value: String(active), hint: 'selectable in a cycle' },
      { label: 'Managers', value: String(managers), hint: 'hold a reporting line' },
      { label: 'Deactivated', value: String(off), hint: 'history retained' },
      { label: 'Open rights requests', value: String(open), hint: 'awaiting People Ops' }
    ];
  });

  lines = computed(() => {
    const all = this.employees();
    const ids = [];
    all.forEach(e => { if (e.manager_id && ids.indexOf(e.manager_id) === -1) ids.push(e.manager_id); });
    return ids
      .map(id => ({ manager: this.find(id), reports: all.filter(e => e.manager_id === id && !e.erased) }))
      .filter(g => g.manager)
      .sort((a, b) => b.reports.length - a.reports.length);
  });

  unassigned = computed(() => this.employees().filter(e => !e.manager_id && !e.erased));

  /* ---------- directory actions ---------- */
  clearFilters() {
    this.query.set('');
    this.roleFilter.set('all');
    this.statusFilter.set('all');
  }

  startAdd() {
    this.editingId.set(null);
    this.formError.set(null);
    this.fName.set('');
    this.fEmail.set('');
    this.fRole.set('employee');
    this.fManager.set('');
    this.fActive.set(true);
    this.showForm.set(true);
  }

  startEdit(e) {
    this.editingId.set(e.id);
    this.formError.set(null);
    this.fName.set(e.name);
    this.fEmail.set(e.work_email);
    this.fRole.set(e.role);
    this.fManager.set(e.manager_id || '');
    this.fActive.set(e.is_active);
    this.showForm.set(true);
  }

  cancelForm() {
    this.showForm.set(false);
    this.formError.set(null);
    this.saving.set(false);
  }

  saveEmployee() {
    const name = this.fName().trim();
    const email = this.fEmail().trim();
    const editing = this.editingId();

    if (!name) {
      this.formError.set('Enter the full name as it should appear to reviewers in a cycle.');
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      this.formError.set('That is not a work email address Quorq can send an invitation to. Use the form rhea.menon@quorq.ai.');
      return;
    }
    const clash = this.employees().find(x => x.work_email.toLowerCase() === email.toLowerCase() && x.id !== editing);
    if (clash) {
      this.formError.set(clash.name + ' already uses ' + email + '. Each record needs its own work email — check whether this person is in the directory already.');
      return;
    }
    if (editing && this.fManager() === editing) {
      this.formError.set(name + ' cannot be set as their own manager. Pick a different reporting line.');
      return;
    }
    const chosen = this.find(this.fManager());
    if (editing && chosen && chosen.manager_id === editing) {
      this.formError.set(chosen.name + ' already reports to ' + name + '. Setting this line would create a circular report — change one of the two lines first.');
      return;
    }

    this.formError.set(null);
    this.saving.set(true);
    const role = this.fRole();
    const managerId = this.fManager() || null;
    const active = this.fActive();

    setTimeout(() => {
      if (editing) {
        this.employees.set(this.employees().map(e =>
          e.id === editing ? Object.assign({}, e, { name: name, work_email: email, role: role, manager_id: managerId, is_active: active }) : e
        ));
        this.recent.set([editing].concat(this.recent()));
        this.banner.set({ text: 'Record updated — ' + name + ' is saved and the new details show everywhere in Quorq.', undoId: null });
      } else {
        const id = 'e-0' + this.seq;
        this.seq = this.seq + 1;
        const row = {
          id: id, name: name, work_email: email, role: role, manager_id: managerId,
          is_active: active, created_at: this.today, erased: false
        };
        this.employees.set([row].concat(this.employees()));
        this.recent.set([id].concat(this.recent()));
        this.banner.set({ text: name + ' is in the directory and can be selected as a subject or reviewer in the next cycle.', undoId: null });
      }
      this.saving.set(false);
      this.showForm.set(false);
    }, 620);
  }

  toggleActive(e) {
    const next = !e.is_active;
    this.employees.set(this.employees().map(x => x.id === e.id ? Object.assign({}, x, { is_active: next }) : x));
    this.recent.set([e.id].concat(this.recent()));
    this.banner.set(next
      ? { text: e.name + ' is active again and can be picked for new cycles.', undoId: null }
      : { text: e.name + ' is deactivated: no sign-in, excluded from new cycle selection. Past feedback is kept.', undoId: e.id });
  }

  undo(id) {
    const e = this.find(id);
    if (!e) return;
    this.employees.set(this.employees().map(x => x.id === id ? Object.assign({}, x, { is_active: true }) : x));
    this.banner.set({ text: (e.name) + ' is active again — the deactivation was undone.', undoId: null });
  }

  reload() {
    this.reloading.set(true);
    setTimeout(() => {
      this.reloading.set(false);
      this.stale.set(false);
      this.lastSynced.set('10:06 IST');
      this.banner.set({ text: 'Directory reloaded. Sneha Pillai’s two edits — Daniel Okafor’s line and Ishaan Gupta’s status — are now shown.', undoId: null });
    }, 700);
  }

  /* ---------- reporting lines ---------- */
  saveLine() {
    const empId = this.rlEmployee();
    const mgrId = this.rlManager();
    this.rlSuccess.set(null);

    if (!empId) {
      this.rlError.set('Choose whose reporting line you are changing.');
      return;
    }
    const emp = this.find(empId);
    if (mgrId === empId) {
      this.rlError.set(emp.name + ' cannot report to themselves. Pick a different manager, or leave the line empty for the top of the org.');
      return;
    }
    const mgr = this.find(mgrId);
    if (mgr && mgr.manager_id === empId) {
      this.rlError.set(mgr.name + ' already reports to ' + emp.name + '. Saving this would create a circular reporting line — change one of the two lines first.');
      return;
    }

    this.rlError.set(null);
    this.employees.set(this.employees().map(e => e.id === empId ? Object.assign({}, e, { manager_id: mgrId || null }) : e));
    this.recent.set([empId].concat(this.recent()));
    this.rlSuccess.set(mgr
      ? 'Saved — ' + emp.name + ' now reports to ' + mgr.name + '. ' + mgr.name + ' can open ' + emp.name + '’s aggregated report from the next cycle onward.'
      : 'Saved — ' + emp.name + ' sits at the top of the reporting line and has no manager.');
    this.rlEmployee.set('');
    this.rlManager.set('');
  }

  /* ---------- data rights ---------- */
  focusRequestForm() {
    this.drError.set('Pick the data principal and the request type above, then log it.');
  }

  logRequest() {
    if (!this.drEmployee()) {
      this.drError.set('Choose whose data the request is about before logging it.');
      return;
    }
    this.drError.set(null);
    const id = 'dr-' + this.reqSeq;
    this.reqSeq = this.reqSeq + 1;
    const row = {
      id: id,
      employee_id: this.drEmployee(),
      type: this.drType(),
      status: 'new',
      raised_at: this.today,
      actioned_by: null,
      actioned_at: null,
      notes: this.drNotes().trim() || 'No further detail recorded at intake.'
    };
    this.requests.set([row].concat(this.requests()));
    this.recent.set([id].concat(this.recent()));
    this.banner.set({ text: this.typeLabel(row.type) + ' request logged for ' + this.employeeName(row.employee_id) + ' and written to the audit log as ' + id + '.', undoId: null });
    this.drEmployee.set('');
    this.drType.set('access');
    this.drNotes.set('');
  }

  startRequest(r) {
    this.requests.set(this.requests().map(x => x.id === r.id ? Object.assign({}, x, { status: 'in_progress', actioned_by: 'Susan Raya' }) : x));
    this.banner.set({ text: 'Request ' + r.id + ' is in progress, assigned to Susan Raya.', undoId: null });
  }

  markActioned(r) {
    this.requests.set(this.requests().map(x => x.id === r.id
      ? Object.assign({}, x, { status: 'actioned', actioned_by: 'Susan Raya', actioned_at: this.today })
      : x));
    this.banner.set({ text: this.typeLabel(r.type) + ' request ' + r.id + ' actioned for ' + this.employeeName(r.employee_id) + ' on ' + this.today + '.', undoId: null });
  }

  eraseNow(r) {
    const name = this.employeeName(r.employee_id);
    const ref = 'ERS-' + r.id.replace('dr-', '');
    this.employees.set(this.employees().map(e => e.id === r.employee_id
      ? Object.assign({}, e, { name: 'Record erased', work_email: '—', is_active: false, erased: true, ref: ref, erased_on: this.today })
      : e));
    this.requests.set(this.requests().map(x => x.id === r.id
      ? Object.assign({}, x, { status: 'actioned', actioned_by: 'Susan Raya', actioned_at: this.today })
      : x));
    this.confirmErase.set(null);
    this.recent.set([r.id].concat(this.recent()));
    this.banner.set({ text: name + '’s personal data is erased (ref ' + ref + '). Aggregated, anonymised feedback is retained — it cannot re-identify anyone.', undoId: null });
  }
}
