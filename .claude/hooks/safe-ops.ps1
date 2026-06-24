# PreToolUse hook — blocks destructive operations
# Claude Code passes tool input via stdin as JSON

$inputJson = [Console]::In.ReadToEnd()
$toolInput = $inputJson | ConvertFrom-Json
$command = $toolInput.tool_input.command

$blocked = @('rm\s+-rf', 'drop\s+table', 'npm\s+publish', 'Remove-Item\s+-Recurse\s+-Force')

foreach ($pattern in $blocked) {
    if ($command -match $pattern) {
        Write-Host "Blocked: '$command' matches a restricted pattern. Requires manual confirmation."
        exit 2
    }
}

exit 0
