<?php

namespace App\Http\Controllers;

use App\Http\Requests\NoticeCreateRequest;
use App\Models\Notice;
use App\Services\NoticeService;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Mockery\Matcher\Not;

class NoticeController extends Controller
{
    public function index(NoticeService $noticeService): Response
    {
        $this->authorize('showNotice', Notice::class);

        return Inertia::render('Notice/Index', [
            'notices' => $noticeService->lists(),
        ]);
    }

    public function store(NoticeCreateRequest $request, NoticeService $noticeService):RedirectResponse
    {
        $this->authorize('showNotice', Notice::class);
        try {
            $noticeService->store($request);
            return to_route('notice.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function create() :Response | RedirectResponse
    {
        $this->authorize('createNotice', Notice::class);

        try {
            return Inertia::render('Notice/Create');
        }catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function show(Notice $notice, Request $request,NoticeService $noticeService):Response | RedirectResponse
    {
        try {
            return Inertia::render('Notice/Show', [
                'notice' => $noticeService->show($notice,$request)
            ]);
        }catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }


    public function edit(Notice $notice) :Response | RedirectResponse
    {
        $this->authorize('editNotice', Notice::class);

        try {
            return Inertia::render('Notice/Edit', [
                'notice' => $notice,
            ]);
        }catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function update(NoticeCreateRequest $request, Notice $notice,NoticeService $noticeService)
    {
        $this->authorize('editNotice', Notice::class);

        try {
            $noticeService->update($notice, $request);
            return to_route('notice.index');
        }catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }

    }

    public function destroy(Notice $notice , NoticeService $noticeService)
    {
        $this->authorize('deleteNotice', Notice::class);

        try {
            $noticeService->delete($notice);

            return to_route('notice.index');
        }catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }
}
