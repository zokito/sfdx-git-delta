'use strict'

const METAFILE_SUFFIX = '-meta.xml'
const META_REGEX = new RegExp(`${METAFILE_SUFFIX}$`)
const OBJECT_META_XML_SUFFIX = `object${METAFILE_SUFFIX}`
const MASTER_DETAIL_TAG = '<type>MasterDetail</type>'
const FIELD_DIRECTORY_NAME = 'fields'
const LABEL_EXTENSION = 'labels'
const LABEL_DIRECTORY_NAME = `labels.${LABEL_EXTENSION}`
const OBJECT_TRANSLATION_META_XML_SUFFIX = `objectTranslation${METAFILE_SUFFIX}`
const INFOLDER_SUFFIX = `Folder`
module.exports.METAFILE_SUFFIX = METAFILE_SUFFIX
module.exports.META_REGEX = META_REGEX
module.exports.OBJECT_META_XML_SUFFIX = OBJECT_META_XML_SUFFIX
module.exports.MASTER_DETAIL_TAG = MASTER_DETAIL_TAG
module.exports.FIELD_DIRECTORY_NAME = FIELD_DIRECTORY_NAME
module.exports.LABEL_EXTENSION = LABEL_EXTENSION
module.exports.LABEL_DIRECTORY_NAME = LABEL_DIRECTORY_NAME
module.exports.INFOLDER_SUFFIX = INFOLDER_SUFFIX
module.exports.OBJECT_TRANSLATION_META_XML_SUFFIX =
  OBJECT_TRANSLATION_META_XML_SUFFIX
