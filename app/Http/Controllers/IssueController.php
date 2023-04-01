<?php

namespace App\Http\Controllers;

use App\Enums\DormitoryIdStatic;
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
        return Inertia::render('Issue/Index', [
            'issues' => new IssueCollection(
                Issue::query()->with(['issuer', 'assigner', 'resolver'])->paginate()
            )
        ]);
    }

    public function store(StoreIssueRequest $request)
    {
        Issue::query()->create($request->validated());
        return to_route('issue.index')->with('success', 'Issue created');
    }

    public function create()
    {
        return Inertia::render('Issue/Create');
    }

    public function show(Issue $issue)
    {
        return Inertia::render('Issue/Show', [
            'issue' => $issue->load('issuer', 'assigner', 'resolver')
        ]);
    }


    public function edit(Issue $issue)
    {
        return Inertia::render('Issue/Edit', [
            'issue' => $issue,
            'resolvers' => User::query()->with(['dormitory' => function ($q) {
                $q->whereId(DormitoryIdStatic::DORMITORYID)->select('name');
            }])
                ->select('id', 'first_name','last_name')
                ->get()
                ->toArray()
        ]);
    }


    public function update(UpdateIssueRequest $request, Issue $issue)
    {
        $issue->update($request->validated());
        return to_route('issue.index')->with('success', 'Issue updated');
    }


    public function destroy(Issue $issue)
    {
        $issue->delete();
        return to_route('issue.index')->with('success', 'Issue deleted');
    }
}
