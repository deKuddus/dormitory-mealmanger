<?php

namespace App\Http\Controllers\Member;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreIssueRequest;
use App\Models\Issue;
use App\Services\IssueService;
use Exception;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class IssueController extends Controller
{

    public function index(IssueService $issueService): Response|RedirectResponse
    {
        try {
            return Inertia::render('Member/Issue/Index', [
                'issues' => $issueService->list()
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function store(StoreIssueRequest $request, IssueService $issueService): RedirectResponse
    {
        try {
            $issueService->store($request);
            return to_route('user.issue.index')->with('success', 'Issue created');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }

    }

    public function create(): Response|RedirectResponse
    {
        try {
            return Inertia::render('Member/Issue/Create');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function show(Issue $issue): Response|RedirectResponse
    {
        try {
            return Inertia::render('Member/Issue/Show', [
                'issue' => $issue->load('issuer', 'assigner', 'resolver')
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }


    public function edit(Issue $issue): Response|RedirectResponse
    {
        try {
            if ($issue->issued_by !== auth()->id()) {
                abort(403, 'Unauthorized Action');
            }

            return Inertia::render('Member/Issue/Edit', [
                'issue' => $issue,
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }


    public function update(StoreIssueRequest $request, Issue $issue, IssueService $issueService): RedirectResponse
    {
        try {
            $issueService->update($issue, $request);
            return to_route('user.issue.index')->with('success', 'Issue updated');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }


    public function destroy(Issue $issue, IssueService $issueService): RedirectResponse
    {
        try {
            $issueService->delete($issue);
            return to_route('user.issue.index')->with('success', 'Issue deleted');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }
}
