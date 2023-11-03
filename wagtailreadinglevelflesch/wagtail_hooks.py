"""
Registers the functions for our plugin.
On loading, Wagtail will find this file and execute the contents.
"""
from wagtail import hooks
from wagtail.admin.rich_text.editors.draftail.features import ControlFeature


@hooks.register('register_rich_text_features')
def register_readinglevel_feature(features):
    feature_name = 'readinglevelflesch'
    features.default_features.append(feature_name)

    features.register_editor_plugin(
        'draftail',
        feature_name,
        ControlFeature({
            'type': feature_name,
        },
        js=['wagtailreadinglevel.flesch.bundle.js'],
        ),
    )
