# To-Do App

## Requirements

### Functional requirements

1. As a user, I can create a task with a name, description and expiration date.
2. As a user, I can mark an outstanding task as completed
3. As a user, I can view both my outstanding and completed tasks.

All of these requirements - nothing more, nothing less - must be fulfilled.

### Visual requirements

Please have the UI match the [provided mocks](https://www.figma.com/design/zIOfivBRzxRLX4KRgdsdDz/Clad-Interview-Exercise?node-id=0-1&t=luCliDWIhgoGrZdE-1). If, for any reason, the UI does not match the provided mocks, please detail and explain all discrepancies in the submission.

## Success Criteria

All submissions will be evaluated along the following dimensions:

1. Functional Requirements: All functional requirements are fulfilled, with no apparent bugs.
2. Visual Requirements: The UI matches the provided mocks
3. Code Quality: The code is well-organized and easy to read

## Set-Up

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). To get started:

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the app with `npm start`. This runs the app in the development mode on [http://localhost:3000](http://localhost:3000). Whenever you make changes to the code, the page will reload.

## Implementation Overview

### Functional Requirements

All functional requirements have been successfully implemented:

1. **Task Creation**: Users can create tasks with a name, description (optional), and expiration date.
2. **Task Completion**: Users can make tasks completed by clicking the checkbox.
3. **Task Views**: Tasks are automatically categorized and displayed in three sections:
   - **Overdue**: Incomplete tasks past their due date
   - **Outstanding**: Incomplete tasks that are not yet overdue
   - **Complete**: Tasks marked as completed

### Technical Implementation

- **Core Components**:
  - `App.tsx`: Main application component managing state of tasks and storing them on browser.
  - `TaskForm.tsx`: Form component for creating new tasks
  - `TaskList.tsx`: Component for rendering categorized task sections
  - `TaskItem.tsx`: Individual task display component

- **Type Definitions** (`types.ts`):
  - `Task`: Interface defining task structure (id, name, description, dueDate, completed, createdAt)
  - `TaskState`: Type for task categorization

- **Utility Functions** (`utils.ts`):
  - Date formatting and validation
  - Task categorization logic (overdue, outstanding, complete)
  - Overdue detection based on current date

- **Styling**: Used the figma mock to match colors and styles with tailwind CSS
- **State Management**: React hooks (useState, useEffect) for localStorage persistence
- **Data Persistence**: Tasks are saved to localStorage and persist across sessions (closing site and reopening)

### Visual Requirements

The UI closely matches the provided Figma mocks with one discrepancy I am aware of:

**Discrepancy**: The "+" icon on the "Add" button uses a text character (`+`) instead of an image/icon asset. This was easier for me to implement.
**Package Changes**: Added a linter for use before submitting.
