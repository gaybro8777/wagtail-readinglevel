# wagtail-readinglevel
A lightweight Wagtail plugin to determine the reading level of text input into a rich text field.

Currently there are two available modes:
1. (Default) Reading Age - calculated using the [Automated Readability Index](https://en.wikipedia.org/wiki/Automated_readability_index).
2. SMOG Index - calculated the [SMOG Index](https://en.wikipedia.org/wiki/SMOG) (only suitable for English).
3. Coleman-Liau Index - calculated using the [Coleman-Liau Index](https://en.wikipedia.org/wiki/Coleman%E2%80%93Liau_index).
4. Flesch Score - calculated using the [Flesch Reading Ease forumal](https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests) (only suitable for English).
5. Gunning Fog Index - calculated using the [Gunning Fog Index](https://en.wikipedia.org/wiki/Gunning_fog_index)

## Compatibility

- Wagtail >= 5.1
- Django >= 3.2

if you need to use this package on an earlier Wagtail version than 5.1, you can use the PyPi 3.5.0 release: <https://pypi.org/project/wagtail-readinglevel/3.5.0/>

## Installation

The package is intended to be installed from Github, not PyPi. To install:

Add the following to your ```requirements.txt``` file:

```
-e git+https://github.com/torchbox-forks/wagtail-readinglevel.git@master#egg=wagtail-readinglevel
```

or if you are using poetry Run 

```
poetry add git+https://github.com/torchbox-forks/wagtail-readinglevel.git@master#egg=wagtail-readinglevel
``````

Add the desired plugin app names to your list of installed apps AFTER all wagtail app includes (e.g. wagtail.admin, wagtail.core etc.). 

The names are:
  - ```wagtailreadinglevel``` for Automated Readability Index (Reading Age)
  - ```wagtailreadinglevelsmog``` for SMOG Index
  - ```wagtailreadinglevelcoleman``` for Coleman-Liau Index
  - ```wagtailreadinglevelflesch``` for Flesh Reading Ease Score
  - ```wagtailreadinglevelfog``` for the Gunning Fog index

The plugin will show results for any rich text fields which don't use a limited ```features``` list.

For feature-limited fields, you'll need to add their names to that list. The names are:

  - ```readinglevel``` for Automated Readability Index (Reading Age)
  - ```readinglevelsmog``` for SMOG Index
  - ```readinglevelcoleman``` for Coleman-Liau Index
  - ```readinglevelflesch``` for Flesch Reading Ease Score
  - ```readinglevelfog``` for the Gunning Fog index

## Usage

Once installed You will see the reading level and/or smog index displayed under all rich text fields in your Wagtail admin area (depending on which you added to your list of installed apps).

## Contributing

The original author of this plugin has no plans to continue development.

[Torchbox](https://torchbox.com/) will continue to maintain this package [here](https://github.com/torchbox-forks/wagtail-readinglevel) for the foreseeable future. We won't be releasing the package on PyPi but will be managing releases via Github. If you would like to contribute, please feel free to submit a pull request.

## Development setup

Set up a virtualenv:

```
python3 -m venv venv
```

Activate the virtualenv:

```
source venv/bin/activate
```

Install the dependencies:

```
pip install -e .
```

## Run the testing app

There is a basic testing app available in the ```testapp``` directory change to that directory and run the following commands:

```
./manage.py migrate
./manage.py createsuperuser
./manage.py runserver
```

You can use the the richext fields in the test app to test the plugin.

### Building the frontend assets (javascript helpers)

The javascript helpers are built using webpack and can be found the src directory. To build the assets run the following command from the root of the project:

```
nvm use && npm install
```

Then you can run the following command to build the assets:

```
npm run build
```

This will compile the sources and place the output in the following respective directories:

```
wagtailreadinglevel/static
wagtailreadinglevelsmog/static
wagtailreadinglevelcoleman/static
wagtailreadinglevelflesch/static
wagtailreadinglevelfog/static
```

The javascript file are loaded by each wagtail_hook. The hooks are defined in the ```wagtail_hooks.py``` file in each app.
