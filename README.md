# Visit Gainesville 360

## Heroku Branch

Welcome to the Heroku branch. See the app on Heroku here: https://visitgainesville360.herokuapp.com/

To get started working on the Heroku branch, run the following commands in your `visitgainesville360` directory:

1. `heroku login`
2. `heroku git:remote -a visitgainesville360` (Note: If you currently have a branch named heroku, you should either remove this or change the name of one of the branches)
3. `git add .`
4. `git commit -m "Does something"`
5. `git push heroku local_branch_name:master`
6. The updates should be deployed

You should test your changes locally first. Updates meant to run in the app should also be made to this branch. You should think of this branch as a prod branch.
