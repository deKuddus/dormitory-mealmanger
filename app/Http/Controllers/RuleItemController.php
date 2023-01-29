<?php

namespace App\Http\Controllers;

use App\Http\Requests\RuleItemRequest;
use App\Http\Resources\RuleItemCollection;
use App\Models\Rule;
use App\Models\RuleItem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RuleItemController extends Controller
{
    public function index()
    {
        $requestParam = \request()->all('search', 'trashed');
        return Inertia::render('RuleItem/Index', [
            'filters' => $requestParam,
            'ruleItems' => new RuleItemCollection(
                RuleItem::query()
                    ->with('rule')
                    ->orderBy('created_at', 'desc')
                    ->paginate()
                    ->appends(request()->all())
            ),
        ]);
    }

    public function create()
    {
        return Inertia::render('RuleItem/Create',[
            'rules' => Rule::active()->get(['id', 'title'])->toArray(),
        ]);
    }

    public function store(RuleItemRequest $request)
    {
        RuleItem::create(
            $request->validated()
        );

        return to_route('ruleItem.index');
    }

    public function show($id)
    {

    }


    public function edit(RuleItem $ruleItem)
    {
        return Inertia::render('RuleItem/Edit', [
            'ruleItem' => $ruleItem,
            'rules' => Rule::active()->get(['id', 'title'])->toArray(),
        ]);
    }

    public function update(RuleItemRequest $request, RuleItem $ruleItem)
    {
        $ruleItem->update(
            $request->validated()
        );

        return to_route('ruleItem.index');
    }

    public function destroy(RuleItem $ruleItem)
    {
        $ruleItem->delete();

        return to_route('ruleItem.index');
    }

    public function restore(RuleItem $ruleItem)
    {
        $ruleItem->restore();
        return redirect()->back();
    }
}
