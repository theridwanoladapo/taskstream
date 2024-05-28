import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import TasksTable from "./TasksTable";

export default function Index({ auth, tasks, queryParams = null, success }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Tasks
                    </h2>
                    <Link href={route('task.create')}
                    className="bg-emerald-500 py-1 px-3 text-white shadow rounded transition-all hover:bg-emerald-600">
                        Add New Task
                    </Link>
                </div>
            }
        >
            <Head title="Tasks" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <TasksTable tasks={tasks} queryParams={queryParams} success={success} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
