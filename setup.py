#!/usr/bin/env python
"""
Installs a Wagtail plugin that adds reading level calculations to Draftail.
This helps content editors create content that conforms to the WCAG 2.0
"""

from setuptools import setup, find_packages

setup(name='wagtail-readinglevel',
      version='3.5.0',
      description='Wagtail plugin that adds reading level calculations to Draftail.',
      long_description='Wagtail plugin that adds reading level calculations to Draftail.',
      url='https://github.com/torchbox-forks/wagtail-readinglevel',
      author='VIX Digital (original) / Torchbox (fork)',
      author_email='hello@torchbox.com',
      license='MIT',
      packages=find_packages(),
      include_package_data=True,
      install_requires=[
          'wagtail>=5.1',
      ],
      zip_safe=False)
