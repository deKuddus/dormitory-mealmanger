<?php

namespace App\Http\Controllers;

use App\Http\Requests\RuleRequest;
use App\Http\Resources\DormitoryCollection;
use App\Http\Resources\RuleCollection;
use App\Models\Rule;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RuleController extends Controller
{
    public function index()
    {
        $this->authorize('showRule', Rule::class);

        return Inertia::render('Rule/Index', [
            'rules' => new RuleCollection(
                Rule::query()
                    ->orderBy('created_at', 'desc')
                    ->paginate()
            ),
        ]);
    }

    public function create()
    {
        $this->authorize('createRule', Rule::class);

        return Inertia::render('Rule/Create');
    }

    public function store(RuleRequest $request)
    {
        $this->authorize('createRule', Rule::class);

        Rule::create(
            $request->validated()
        );

        return to_route('rule.index');
    }

    public function show(Rule $rule)
    {
        return Inertia::render('Rule/Show', [
            'rule' => $rule
        ]);
    }


    public function edit(Rule $rule)
    {
        $this->authorize('editRule', Rule::class);

        return Inertia::render('Rule/Edit', [
            'rule' => $rule,
        ]);
    }

    public function update(RuleRequest $request, Rule $rule)
    {
        $this->authorize('editRule', Rule::class);

        $rule->update(
            $request->validated()
        );

        return to_route('rule.index');
    }

    public function destroy(Rule $rule)
    {
        $this->authorize('deleteRule', Rule::class);

        $rule->delete();

        return to_route('rule.index');
    }

    public function restore(Rule $rule)
    {
        $rule->restore();
        return redirect()->back();
    }
}
