Write-Host "Batch Name: SUMMARYARY"
Write-Host "Start Time: $(Get-Date)"
Write-Host "==========================================================="

$host.ui.RawUI.WindowTitle = "Batch Name: SUMMARYARY"

# Check if the previous batch is running or not. If it is, recheck after 5 minutes.
$processName = "FileMaker Pro"
while (Get-Process -Name $processName -ErrorAction SilentlyContinue) {
    Write-Host "The previous batch is currently running, please wait..."
    $duration = 25
    while ($duration -gt 0) {
        Write-Host "Recheck in $($duration) seconds"
        $duration--
        Start-Sleep -Seconds 1        
    }    
    Write-Host "------------------------------"
}

# Start the batch if there are no batches running.
Write-Host "The batch will now start. Please wait..."
Start-Process -FilePath "D:\Test\SUMMARYARY.fmp12"
Start-Sleep -Seconds 10

