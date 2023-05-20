<?php

namespace App\Services;

use App\Http\Resources\RuleCollection;
use App\Models\Rule;
use Exception;
use Illuminate\Http\Request;

class RuleService
{
    public function list(): RuleCollection
    {
        try {
            return new RuleCollection(
                Rule::query()
                    ->orderBy('created_at', 'desc')
                    ->paginate()
            );
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function store(Request $request): Rule
    {
        try {
            return Rule::create(
                $request->validated()
            );
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function update(Rule $rule, Request $request): Rule
    {
        try {
            $rule->update(
                $request->validated()
            );
            return $rule;
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function delete(Rule $rule): Rule
    {
        try {
            $rule->delete();
            return $rule;
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }
}
