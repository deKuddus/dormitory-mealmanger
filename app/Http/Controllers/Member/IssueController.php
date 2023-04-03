<?php

namespace App\Http\Controllers\Member;

use App\Enums\DormitoryIdStatic;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreIssueRequest;
use App\Http\Requests\UpdateIssueRequest;
use App\Http\Resources\IssueCollection;
use App\Models\Issue;
use App\Models\User;
use Inertia\Inertia;

class IssueController extends Controller
{

    public function index()
    {
        return Inertia::render('Member/Issue/Index', [
            'issues' => new IssueCollection(
                Issue::query()->with(['issuer', 'assigner', 'resolver'])->paginate()
            )
        ]);
    }

    public function store(StoreIssueRequest $request)
    {
        Issue::query()->create($request->validated());
        return to_route('user.issue.index')->with('success', 'Issue created');
    }

    public function create()
    {
        return Inertia::render('Member/Issue/Create');
    }

    public function show(Issue $issue)
    {
        return Inertia::render('Member/Issue/Show', [
            'issue' => $issue->load('issuer', 'assigner', 'resolver')
        ]);
    }


    public function edit(Issue $issue)
    {
        if($issue->issued_by !== auth()->id()){
            abort(403,'Unauthorized Action');
        }
        return Inertia::render('Member/Issue/Edit', [
            'issue' => $issue,
        ]);
    }


    public function update(StoreIssueRequest $request, Issue $issue)
    {
        $issue->update($request->validated());
        return to_route('user.issue.index')->with('success', 'Issue updated');
    }


    public function destroy(Issue $issue)
    {
        $issue->delete();
        return to_route('user.issue.index')->with('success', 'Issue deleted');
    }
}
