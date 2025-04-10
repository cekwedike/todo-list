import { useTodo } from "@/context/TodoContext";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Circle, ListTodo } from "lucide-react";

export const TodoStats = () => {
  const { state } = useTodo();
  const { todos } = state;

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;

  const stats = [
    {
      label: "Total Tasks",
      value: totalTodos,
      icon: ListTodo,
      color: "text-blue-500",
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
      label: "Completed",
      value: completedTodos,
      icon: CheckCircle2,
      color: "text-green-500",
      bgColor: "bg-green-100 dark:bg-green-900/20",
    },
    {
      label: "Pending",
      value: pendingTodos,
      icon: Circle,
      color: "text-yellow-500",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/20",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <Card
          key={stat.label}
          className="flex items-center gap-4 p-4 transition-colors hover:bg-accent/50"
        >
          <div className={`rounded-lg p-2 ${stat.bgColor}`}>
            <stat.icon className={`h-6 w-6 ${stat.color}`} />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              {stat.label}
            </p>
            <h3 className="text-2xl font-bold">{stat.value}</h3>
          </div>
        </Card>
      ))}
    </div>
  );
}; 