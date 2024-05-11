//? references: https://www.interviewbit.com/git-interview-questions/

//! What is Git and why is it used?
// Git is a popular open-source distributed version control system (DVCS) used for managing projects of all sizes. It's great for teams working together on projects as it tracks changes, supports collaboration, and helps manage versions efficiently. Developers can easily see who made what changes, run tests, fix bugs, and implement new features. Git also allows reverting to previous working versions, saving a lot of effort in case of issues.

// ================================================
//# Basic GIT Interview Questions
// ================================================

//! 1. What is a version control system (VCS)?
// A Version Control System (VCS) is a tool that helps developers working on projects as a team to keep track of their contributions. It stores the history of changes made to the code, allowing developers to introduce new code, fix bugs, and run tests confidently, knowing that they can revert back to a previously working version if needed.

//! 2. What is a git repository?
// A repository is a file structure where git stores all the project-based files. Git can either stores the files on the local or the remote repository.

//! 3. What does git clone do?
// The command creates a copy (or clone) of an existing git repository. Generally, it is used to get a copy of the remote repository to the local repository.

//! 4. What does the command git config do?
// The `git config` command is used to configure various aspects of Git, such as repository settings, user information, and preferences. It allows you to define how Git behaves for a specific repository or globally across your Git installations. For example, you can set your name and email address for commits, configure aliases for commonly used Git commands, and manage other Git settings.
```
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

//! 5. Can you explain head in terms of git and also tell the number of heads that can be present in a repository?
// A "head" in Git is a reference to the latest commit on a branch. Every repository has a default head called "master" or "main" (as per GitHub), but there can be multiple heads in a repository.
//* Here are some common usages:
// - To move back to one commit before the latest, you can use `git checkout HEAD~1`.
// - To undo the last three commits without losing changes, first use `git reset HEAD~3`. Then, manually update the changes and commit them.
// - To undo the last three commits and discard changes, use `git reset --hard HEAD~3`. This command removes all changes.
// - To see the changes in the last three commits, use `git diff HEAD~3`.
// - To create a new commit by reverting the last three commits, use `git revert --no-commit HEAD~3...HEAD`.

//! 6. What is a conflict?
// In Git, when multiple people are working on the same project and making changes in different branches, conflicts can occur during merges. Here are two common scenarios:
//**Conflicting Changes:** 
// If two branches modify the same line in a file, Git cannot automatically decide which change to keep.
//**File Deletion Conflict:** 
// If one branch deletes a file while another modifies it, Git cannot determine whether to keep the deletion or the modifications.
//# To resolve these conflicts:
//- Communicate with your team to understand the changes and decide which ones to keep.
//- Manually edit the conflicting files to merge the changes as per the team's decision.

//! 8. What does git status command do?
// git status command is used for showing the difference between the working directory and the index which is helpful for understanding git in-depth and also keep track of the tracked and non-tracked changes.

//! 9. Define “Index”.
// Before making commits to the changes done, the developer is given provision to format and review the files and make innovations to them. All these are done in the common area which is known as ‘Index’ or ‘Staging Area’.

//! 10. What does git add command do?
// This command is used to add files and changes to the index of an existing Git directory. Here's a summary:
// - To add all changes at once, use: 
`git add .`
// - To add specific files one by one, use: 
`git add <file_name>`
// - To add the contents of a particular folder, use: 
`git add /<folder_name>/`
