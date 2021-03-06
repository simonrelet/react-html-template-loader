'use strict';

const result = require('./result');

const componentAttributes = require('./rules/components-attributes');
const componentImportsAttributes = require('./rules/component-imports-attributes');
const componentImportsNesting = require('./rules/component-imports-nesting');
const importsRelationTypes = require('./rules/imports-relation-types');
const loopAttributes = require('./rules/loop-attributes');
const noComponentNesting = require('./rules/no-component-nesting');
const noControlMerge = require('./rules/no-control-merge');
const noImportInComponents = require('./rules/no-imports-in-components');
const rootElements = require('./rules/root-elements');
const singleComponentChild = require('./rules/single-component-child');
const singleControlChild = require('./rules/single-control-child');
const singleDefaultComponent = require('./rules/single-default-component');
const styleImportsAttributes = require('./rules/style-imports-attributes');
const styleImportsNesting = require('./rules/style-imports-nesting');
const uniqueIds = require('./rules/unique-ids');

function checkAst(ast) {
  const rules = [
    rootElements,
    singleDefaultComponent,
    noComponentNesting,
    noImportInComponents,
    uniqueIds,
    componentImportsNesting,
    singleComponentChild,
    importsRelationTypes,
    styleImportsNesting,
    singleControlChild,
    noControlMerge,
    componentImportsAttributes,
    styleImportsAttributes,
    componentAttributes,
    loopAttributes
  ];

  return rules
    .map(rule => rule(ast))
    .reduce(result.reducer, result.empty())
    .build();
}

module.exports = checkAst;
