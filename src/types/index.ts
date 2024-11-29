export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate?: Date;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
  category?: string;
}

export interface TimeBlock {
  id: string;
  title: string;
  startTime: Date;
  endTime: Date;
  color: string;
}