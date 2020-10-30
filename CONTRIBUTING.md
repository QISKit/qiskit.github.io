# CONTRIBUTING

Regardless if you are part of the core team or an external contributor, welcome and
thank you for contributing to https://qiskit.org!

In qiskit.org, we aim at creating an excellent work-space where all of us can feel
welcomed, useful, respected and valued. If you are thinking to contribute to
qiskit.org, you agree to abide by our [code of conduct](CODE_OF_CONDUCT.md) which
we strongly recommend you read before continuing.

Following these guidelines communicates you value the time and effort of the core
contributors and maintainers of this site and so, thank you!

## Table of contents

- [Start contributing](#start-contributing)
- [Before you start](#before-you-start)
- [Opening issues](#opening-issues)
- [Contributing code](#contributing-code)
  - [Setup](#setup)
  - [Working on an issue](#working-on-an-issue)
  - [Pull requests](#pull-requests)
  - [Live previews](#live-previews)
  - [Code review](#code-review)
  - [Merging](#merging)
- [Code style](#code-style)
  - [Solving linting issues](#solving-linting-issues)
  - [Type annotations](#type-annotations)

## Start contributing

This repository is for developing and maintaining https://qiskit.org, the website.
If you want to contribute to Qiskit, the open-source Python library, you should go
visit the [Qiskit repository](https://github.com/Qiskit/qiskit) instead.

There are many ways of contributing: from catching a typo to coming up with a way
of improving performance or accessibility; you can open an issue, or you can prepare
a patch. In any case, read the contribution guidelines for opening new issues and
submitting pull requests.

Please, don't use this repository for asking questions about Qiskit: there are
better ways to do it. Refer to our public [Slack](https://ibm.co/joinqiskitslack)
or post a question in [stack overflow](https://stackoverflow.com/questions/tagged/qiskit).

## Before you start

Contributing to qiskit.org, and other Qiskit repositories, assumes you have some level
of [Git](https://git-scm.com) knowledge. For external contributors, a basic understanding
of repositories, remotes, branches and commits is needed. For core contributors, you
should know about resolving conflicts and rebasing too.

There are tons of useful resources about Git [out there](https://try.github.io/).

## Opening issues

You can [open 4 types of issues](https://github.com/Qiskit/qiskit.org/issues/new/choose):

* Bug reports: for reporting a misfunction. Provide steps to reproduce and expected behaviour.
* Content issues: for noticing content-related problems such as typos or rewordings.
* Tasks: a general "to do", in case none of the other templates suits you.
* User stories: for identifying new value for the user.

In addition to these 4 templates, the most common types of tasks are:

* Plain tasks: these are the things that a core contributor usually work on during the sprint.
* [Refactors](https://github.com/Qiskit/qiskit.org/issues?q=label%3A%22type%3A+refactor%22+): these aim at improving our codebase and reducing technical debt.
* [Discussions](https://github.com/Qiskit/qiskit.org/issues?q=label%3A%22type%3A+discussion%22): these provide a central hub for talking about something to [reach a consensus](https://github.com/Qiskit/qiskit.org/issues?q=label%3ADecided+).

Core contributors classify the tasks according to its nature and prioritize them
from sprint to sprint. Types are not mutually exclusive and can change over time
if needed.

## Contributing code

### Setup

So you decided to get your hands dirty and start working on a patch? Then you
need to know that qiskit.org follows the
[Forking Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow)
with [Feature Branches](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).

Regardless if you are a core contributor or not, the above means we expect you to fork
the project on your own GitHub account and make your `master` branch to track this
repository. A typical Git setup after
[forking the project](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo) is:

```sh
# After forking the repository in GitHub
git clone https://github.com/<your_username>/qiskit.org.git
cd qiskit.org
git remote add upstream https://github.com/qiskit/qiskit.org.git
git remote update upstream
git checkout master
git branch -u upstream/master
git pull
```

### Working on an issue

When you are going to start working on an issue, make sure you are in your `master`
branch and that it is entirely up to date and create a new branch with a
meaningful name. The typical terminal code for this is:

```sh
git checkout master
git pull upstream master
git checkout -b issue-1234-new-header
```

Now start adding your changes and remember to commit often:

```sh
git commit
```

And include a summary and some notes or clarifications if needed:

```
Create a new header layout.

Includes a new component factoring out the header of this new page and others.
```

From time to time, you want to check if your `master` branch is still up to
date. If not, you will need to merge
(or [rebase](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase)),
then continue working:

```sh
git checkout master
git pull
git checkout issue-1234-new-header
git merge master
```

### Pull requests

Pull requests serve a double purpose:
1. Share the code with the team. So almost everybody is aware of how the code base is evolving.
2. Provide an opportunity for improving code quality.

When you think your work is done, push the branch to your repository:

```sh
git push origin issue-1234-new-header
# Start a pull request in GitHub
```

And
[create a pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)
against `master` (or a feature branch).
When creating the pull request, provide a description and
[link with the issue that is being solved](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue).

Linking the issue has the advantage of automatically closing the related issue when the pull
request is merged. Unfortunately, this does not work when merging pull requests agains a feature
branch. In these occassions, remember to manually close the related pull requests after
[merging the pull request](#merging).

### Live previews

As part of our continuous integration infrastructure, every pull request receives a
dedicated URL by [Vercel](https://vercel.com/) to preview the changes in it.

When the contribution comes from an external contributor, previews require authorization
from one of the core members of the team.

### Code review

Once you have sent a PR, the code contributors get notified, and there may be a code
review. The code review helps solving implementation, semantic and maintainability issues.

The repository also contains some automated checks such as tests and
[linting](#solving-linting-issues). For a pull request to be ready for merging it needs to
**pass automatic checks and have, at least, one positive review**.

During code reviews, there are two prominent roles: the reviewer and the contributor.
The reviewer acts as the keeper of best-practices and code quality, asking 
clarifying questions, highlighting implementation errors and recommending changes.
We expect the contributor to take recommendations seriously and be willing to
implement suggested changes or take some other action instead.

Notice we don't expect the contributors to address **all** the comments, nor
the reviewer highlight **all** the issues, we hope both take some compromises to provide
as much value and quality as it fits in the estimated effort.

We don't expect discussions to happen in the pull requests. If there is a disagreement,
our recommendation is for the contributor to yield to the reviewer and for the reviewer
to suggest other alternatives.

### Merging

Once all automated checks are passing and there is a positive review, the pull request
can be merged. If you are an external contributor, expect your PR to be merged by
a core contributor.

## Code style

We try to be compliant with Nuxt.js and Vue.js code conventions which are mostly enforced by
the Vetur extension of Visual Studio Code. We highly recommend installing the
[Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) extension when working
with Vue.js and to enable `Vetur > Validation: Interpolation` and `Vetur > Validation: Template Props`.

**Readability** is what we value most. We expect reviewers to pay special attention on readability
so at least they can understand new contributions to the codebase.

### Solving linting issues

While developing, you can check linting issues by running `npm run lint`. Notice that, although
some linting issues are reported as warnings, we don't allow any warning in our code base so
you will need to solve those problems or disable the linter for your contribution to pass the checks.

There are some linting issues that can be automatically fixed by running `npm run fix-lint`.

In the case you need to [disable a rule](https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments),
please provide an explanation supporting why the exception.

### Type annotations

Regarding type checking, we aim at being compliant with
[Tyepscript strict checks](https://www.typescriptlang.org/tsconfig#strict). That means, no implicit
`any` annotations, for instance although does not enforce any particular style in typing.

The golden rule is: **declare your intentions and let type inference do the rest**. Annotate function
and method signatures, also class/object properties and module declarations, and rely on type inference
for intermediate values.

Don't do:

```ts
function max(a, b) {
  return a > b ? a : b
}
```

But instead:

```ts
function max(a: number, b: number): number {
  return a > b ? a : b
}
```

When working with pure JavaScript objects, consider declaring an interface with the methods and
properties you want, then implement a factory function returning an implementation of the interface.

Don't do:

```ts
export default {
  scale: 2,
  magnify (v) {
    return v * this.scale
  }
}
```

But instead:

```ts
interface MyType {
  scale: number
  magnify (v: number): number
}

function _factory () : MyType {
  return {
    scale: 2,
    magnify (v) {
      return v * this.scale
    }
  }
}

export default _factory()
```

## Final words

Thank you for reading until the end of the document! Abiding by these guidelines you
express your willing in collaborating and contributing in a healthy way. Thanks for 
that too!

Now if you are a core contributor, perhaps you're interested in knowing more about
[our procedures in the Wiki](https://github.com/Qiskit/qiskit.org/wiki).
