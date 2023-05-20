<?php

namespace App\Http\Controllers;

use App\Http\Requests\RuleRequest;
use App\Models\Rule;
use App\Services\RuleService;
use Exception;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class RuleController extends Controller
{
    public function index(RuleService $ruleService): Response|RedirectResponse
    {
        $this->authorize('showRule', Rule::class);

        try {
            return Inertia::render('Rule/Index', [
                'rules' => $ruleService->list()
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function create(): Response|RedirectResponse
    {
        $this->authorize('createRule', Rule::class);

        try {
            return Inertia::render('Rule/Create');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function store(RuleRequest $request, RuleService $ruleService): RedirectResponse
    {
        $this->authorize('createRule', Rule::class);

        try {
            $ruleService->store($request);
            return to_route('rule.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function show(Rule $rule): Response|RedirectResponse
    {
        try {
            return Inertia::render('Rule/Show', [
                'rule' => $rule
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }


    public function edit(Rule $rule): Response|RedirectResponse
    {
        $this->authorize('editRule', Rule::class);

        try {
            return Inertia::render('Rule/Edit', [
                'rule' => $rule,
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function update(RuleRequest $request, Rule $rule, RuleService $ruleService): RedirectResponse
    {
        $this->authorize('editRule', Rule::class);

        try {
            $ruleService->update($rule, $request);
            return to_route('rule.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function destroy(Rule $rule, RuleService $ruleService): RedirectResponse
    {
        $this->authorize('deleteRule', Rule::class);

        try {
            $ruleService->delete($rule);
            return to_route('rule.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

}
