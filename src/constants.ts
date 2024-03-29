import { TimeHashedSignType } from '@/utils/hash'

export const TimeFormatYyyyMmDdHhMmSs = 'YYYY-MM-DD HH:mm:ss'

export const AvailableThemes = ['default', 'balance', 'frost', 'material', 'polar-night', 'pretty', 'sunrise']
export const ConfigFileName = 'conf.bin' // main configuration file
export const ConfigStartUpFileName = 'conf.startup.bin' // only read once on every startup
export const ConfigStartUpPwd = '' // pwd of ConfigStartUpFile

export const DefaultFileExt = ''
export const DefaultFileNameRule = TimeHashedSignType.formattedTimeSha256
export const DefaultListColSortBy = 'ctimeUtc'
export const DefaultListColSortOrder = 'ASC'
export const DefaultSyncIntervalSeconds = '300'// Use string
export const DefaultThemeDark = 'material'
export const DefaultThemeLight = 'default'
export const DefaultTimeFormat = TimeFormatYyyyMmDdHhMmSs

export const MasterPasswordMinLength = 8
export const MasterPasswordMaxLength = 32
export const MasterPasswordSalt = '___enas^#$___' // DO NOT MODIFY, OR THE OLD DATA WILL NOT BE DECRYPTED!

export const ReFileExt = /^(\.+[A-Za-z0-9]+)$/ // if not empty string
export const StrOk = 'OK'
export const StrErr = 'Err'
export const SyncLockTimeoutSeconds = 3600
export const RreviewFileSizeMax = 1024 * 1024 * 50

export const TypeBase64 = 'Base64'
export const TypeBinary = 'Binary'
export const TypeFile = 'File'
export const TypeMarkdown = 'Markdown'
export const TypeNone = 'None'
export const TypeNote = 'Note'
export const TypeString = 'String'
export const TypeTag = 'Tag'

export const TaskEncrypt = 'Encrypt'
export const TaskDecrypt = 'Decrypt'
export const TaskReEncrypt = 'ReEncrypt'
export const TaskChangeMasterPassword = 'Change master password'
export const TaskUpdateFilesSha256 = 'Upadte files SHA256'
export const TaskImportMd = 'Import markdown'
export const TaskExportMd = 'Export markdown'
