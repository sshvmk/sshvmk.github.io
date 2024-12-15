# Not Much

`not-much` is a minimal Hugo theme that I use for my personal website. It doesn't have any fancy shortcode or useless feature.

**It's basic, simple and minimal.**

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Git
- Hugo

### Installing

Clone this repository in your machine:

```shell
$ git clone https://github.com/imgios/not-much.git
```

Change the workdir to `not-much/exampleSite` and start the Hugo server:

```shell
$ cd not-much/exampleSite
$ hugo server -D
hugo server -D
Watching for changes in \not-much\{archetypes,assets,exampleSite,i18n,layouts,static}
Watching for config changes in \not-much\exampleSite\config.toml
Start building sites …
...
Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop
```

Now you are ready to update the theme and see the changes live @ [localhost](http://localhost:1313/).

## Deployment

The theme can be installed in two different ways:

1. By adding `not-much` as submodule in your Hugo website repository

```shell
$ cd your-hugo-website
$ git submodule add https://github.com/imgios/not-much.git themes/not-much
```

2. By adding the `not-much` theme dir in `/your-hugo-website/themes/*`

The first option is quite limited as you won't be able to edit the templates if you wanted to. The second option, on the other hand, gives you the entire structure of the theme and allows you to customise it as you wish.

## Built With

* [Hugo](http://www.dropwizard.io/1.0.2/docs/) - The static site generator framework
* [Bootstrap](https://maven.apache.org/) - Free and open-source CSS library
* [RedHat Mono Font](https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300&display=swap) - Used as theme font

## Contributing

<!-- Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us. -->
Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. [Fork the project](https://github.com/imgios/not-much/fork)
2. Create your Feature Branch (`git checkout -b feat/cool-feature`)
3. Commit your Changes (`git commit -m 'add some cool-feature'`)
4. Push to the Branch (`git push origin feat/cool-feature`)
5. Open a Pull Request

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/imgios/not-much/tags). 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details