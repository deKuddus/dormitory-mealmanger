<?php

namespace App\Services;

use App\Http\Resources\IssueCollection;
use App\Models\Issue;
use Exception;
use Illuminate\Http\Request;

class IssueService
{

    public function lists()
    {
        try {
            return new IssueCollection(
                Issue::query()->with(['issuer', 'assigner', 'resolver'])->paginate()
            );
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }

    public function store(Request $request)
    {
        try {
            return Issue::query()->create($request->validated());
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }

    public function show(Issue $issue)
    {
        try {
            return $issue->load('issuer', 'assigner', 'resolver');
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }

    public function update(Issue $issue, Request $request)
    {
        try {
            $issue->update($request->validated());
            return $issue;
        } catch (Exception $exception) {
            throw new  Exception($exception->getMessage());
        }
    }

    public function delete(Issue $issue)
    {
        try {
            $issue->delete();
            return $issue;
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }
}
