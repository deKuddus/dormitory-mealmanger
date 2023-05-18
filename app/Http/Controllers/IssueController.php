<?php

namespace App\Http\Controllers;

use App\Enums\DormitoryIdStatic;
use App\Http\Requests\StoreIssueRequest;
use App\Http\Requests\UpdateIssueRequest;
use App\Models\Issue;
use App\Services\IssueService;
use App\Services\UserService;
use Exception;
use Inertia\Inertia;

class IssueController extends Controller
{

    public function index(IssueService $issueService)
    {
        try {
            return Inertia::render('Issue/Index', [
                'issues' => $issueService->lists()
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function store(StoreIssueRequest $request, IssueService $issueService)
    {
        try {
            $issueService->store($request);
            return to_route('issue.index')->with('success', 'Issue created');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function create()
    {
        try {
            return Inertia::render('Issue/Create');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function show(Issue $issue, IssueService $issueService)
    {
        try {
            return Inertia::render('Issue/Show', [
                'issue' => $issueService->show($issue)
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }


    public function edit(Issue $issue, UserService $userService)
    {
        try {
            return Inertia::render('Issue/Edit', [
                'issue' => $issue,
                'resolvers' => $userService->getBasicsOfUsers(DormitoryIdStatic::DORMITORYID)
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }


    public function update(UpdateIssueRequest $request, Issue $issue, IssueService $issueService)
    {
        try {
            $issueService->update($issue,$request);
        return to_route('issue.index')->with('success', 'Issue updated');
        }catch (Exception $exception){
            return back()->with('error',$exception->getMessage());
        }
    }


    public function destroy(Issue $issue, IssueService $issueService)
    {
        try {
            $issueService->delete($issue);
            return to_route('issue.index')->with('success', 'Issue deleted');
        }catch (Exception $exception){
            return back()->with('error',$exception->getMessage());
        }

    }
}
