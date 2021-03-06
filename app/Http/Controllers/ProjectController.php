<?php

namespace App\Http\Controllers;

use \App\Project as Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function __invoke() {
        $projects = Project::select('projects.name', 'projects.image_path', 'projects.url', 'projects.description', 'project_headings.title as heading')
            ->join('project_headings', 'projects.heading', '=', 'project_headings.id')
            ->orderBy('project_headings.order', 'asc')
            ->orderBy('projects.name', 'asc')
            ->get()
            ->groupBy('heading');

        return response()->json($projects);
    }
}
