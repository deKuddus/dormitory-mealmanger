<?php

namespace App\Http\Controllers;

use App\Http\Requests\RuleRequest;
use App\Http\Resources\MessCollection;
use App\Http\Resources\RuleCollection;
use App\Models\Rule;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RuleController extends Controller
{
    public function index()
    {
        $requestParam = \request()->all('search', 'trashed');
        return Inertia::render('Rule/Index', [
            'filters' => $requestParam,
            'rules' => new RuleCollection(
                Rule::query()
                    ->withCount('ruleItems')
                    ->orderBy('created_at', 'desc')
                    ->filter($requestParam)
                    ->paginate()
                    ->appends(request()->all())
            ),
        ]);
    }

    public function create()
    {
        return Inertia::render('Rule/Create');
    }

    public function store(RuleRequest $request)
    {
        Rule::create(
            $request->validated()
        );

        return to_route('rule.index');
    }

    public function show($id)
    {

    }


    public function edit(Rule $rule)
    {
        return Inertia::render('Rule/Edit', [
            'rule' => $rule,
        ]);
    }

    public function update(RuleRequest $request, Rule $rule)
    {
        $rule->update(
            $request->validated()
        );

        return to_route('rule.index');
    }

    public function destroy(Rule $rule)
    {
        $rule->delete();

        return to_route('rule.index');
    }

    public function restore(Rule $rule)
    {
        $rule->restore();
        return redirect()->back();
    }
}
