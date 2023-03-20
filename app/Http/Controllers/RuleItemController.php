<?php

namespace App\Http\Controllers;

use App\Helper\Helper;
use App\Http\Requests\RuleItemRequest;
use App\Http\Resources\RuleItemCollection;
use App\Models\Rule;
use App\Models\RuleItem;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RuleItemController extends Controller
{
    public function index()
    {
        $this->authorize('showRuleItem',RuleItem::class);

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
        $this->authorize('createRuleItem',RuleItem::class);


        return Inertia::render('RuleItem/Create',[
          ...Helper::rulesArray()
        ]);
    }

    public function store(RuleItemRequest $request)
    {
        $this->authorize('createRuleItem',RuleItem::class);

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
        $this->authorize('editRuleItem',RuleItem::class);

        return Inertia::render('RuleItem/Edit', [
            'ruleItem' => $ruleItem,
            ...Helper::rulesArray()
        ]);
    }

    public function update(RuleItemRequest $request, RuleItem $ruleItem)
    {
        $this->authorize('editRuleItem',RuleItem::class);

        $ruleItem->update(
            $request->validated()
        );

        return to_route('ruleItem.index');
    }

    public function destroy(RuleItem $ruleItem)
    {
        $this->authorize('deleteRuleItem',RuleItem::class);

        $ruleItem->delete();

        return to_route('ruleItem.index');
    }

    public function restore(RuleItem $ruleItem)
    {
        $ruleItem->restore();
        return redirect()->back();
    }
}
