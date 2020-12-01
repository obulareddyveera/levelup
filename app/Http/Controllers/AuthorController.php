<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Models\Author;

class AuthorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Author::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $query = DB::table('authors')
            ->where('googleId', '=', $request->googleId)
            ->get();

        if (count($query) == 0) {
            DB::beginTransaction();
            try {
                Log::info('api/srsl/staff::post --> : '.$request->name);
                Log::info('api/srsl/staff::post --> : '.$request->familyName);
                Log::info('api/srsl/staff::post --> : '.$request->givenName);
                Log::info('api/srsl/staff::post --> : '.$request->email);
                Log::info('api/srsl/staff::post --> : '.$request->googleId);
                Log::info('api/srsl/staff::post --> : '.$request->imageUrl);
                Log::info('api/srsl/staff::post --> : '.$request->phone);

                
                $author = new Author;
                $author->name = $request->name;
                $author->familyName = $request->familyName;
                $author->givenName = $request->givenName;
                $author->email = $request->email;
                $author->googleId = $request->googleId;
                $author->imageUrl = $request->imageUrl;
                $author->phone = $request->phone;
                $author->isActive = false;
                $author->save();

                DB::commit();
            } catch (Exception $e) {
                Log::error('api/srsl/staff::Exception --> : '.$e);
                DB::rollback();
            }
        } else {
            $query = DB::table('authors')
            ->where('googleId', '=', $request->googleId)
            ->get();
        }

        Log::info('findByGoogleId Respo --== '.$query);
        return response()->json(array('author'=>$query[0]), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
