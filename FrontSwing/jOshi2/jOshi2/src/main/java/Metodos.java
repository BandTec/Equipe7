import oshi.SystemInfo;
import oshi.hardware.*;
import oshi.software.os.OSProcess;
import oshi.software.os.OperatingSystem;
import oshi.util.FormatUtil;

import java.io.File;
import java.util.Arrays;
import java.util.List;

public class Metodos {

    SystemInfo si = new SystemInfo();
    HardwareAbstractionLayer hw = si.getHardware();
    CentralProcessor processor = hw.getProcessor();
    File[] root = File.listRoots();
    public int porcentagemDeUso;

    public String OS() {
        OperatingSystem os = si.getOperatingSystem();

        return os.toString();
    }

    public static String printProcesses0(OperatingSystem os, GlobalMemory memory) {
        System.out.println("Processos: " + os.getProcessCount() + ", Threads: " + os.getThreadCount());
        // Sort by highest CPU
        List<OSProcess> procs = Arrays.asList(os.getProcesses(5, OperatingSystem.ProcessSort.CPU));
        String process = "";

        OSProcess p = procs.get(0);
//
        process += String.format(" %5d   %5.1f   %4.1f   %9s   %9s   %s%n", p.getProcessID(),
                100d * (p.getKernelTime() + p.getUserTime()) / p.getUpTime(),
                100d * p.getResidentSetSize() / memory.getTotal(), FormatUtil.formatBytes(p.getVirtualSize()),
                FormatUtil.formatBytes(p.getResidentSetSize()), p.getName());

        return process;
    }

    public static String printProcesses1(OperatingSystem os, GlobalMemory memory) {
        // Sort by highest CPU
        List<OSProcess> procs = Arrays.asList(os.getProcesses(5, OperatingSystem.ProcessSort.CPU));
        String process = "";

        OSProcess p = procs.get(1);
//
        process += String.format(" %5d   %5.1f   %4.1f   %9s   %9s   %s%n", p.getProcessID(),
                100d * (p.getKernelTime() + p.getUserTime()) / p.getUpTime(),
                100d * p.getResidentSetSize() / memory.getTotal(), FormatUtil.formatBytes(p.getVirtualSize()),
                FormatUtil.formatBytes(p.getResidentSetSize()), p.getName());

        return process;
    }

    public static String printProcesses2(OperatingSystem os, GlobalMemory memory) {
        // Sort by highest CPU
        List<OSProcess> procs = Arrays.asList(os.getProcesses(5, OperatingSystem.ProcessSort.CPU));
        String process = "";

        OSProcess p = procs.get(2);
//
        process += String.format(" %5d   %5.1f   %4.1f   %9s   %9s   %s%n", p.getProcessID(),
                100d * (p.getKernelTime() + p.getUserTime()) / p.getUpTime(),
                100d * p.getResidentSetSize() / memory.getTotal(), FormatUtil.formatBytes(p.getVirtualSize()),
                FormatUtil.formatBytes(p.getResidentSetSize()), p.getName());

        return process;
    }

    public static String printProcesses3(OperatingSystem os, GlobalMemory memory) {
        // Sort by highest CPU
        List<OSProcess> procs = Arrays.asList(os.getProcesses(5, OperatingSystem.ProcessSort.CPU));
        String process = "";

        OSProcess p = procs.get(3);
//
        process += String.format(" %5d   %5.1f   %4.1f   %9s   %9s   %s%n", p.getProcessID(),
                100d * (p.getKernelTime() + p.getUserTime()) / p.getUpTime(),
                100d * p.getResidentSetSize() / memory.getTotal(), FormatUtil.formatBytes(p.getVirtualSize()),
                FormatUtil.formatBytes(p.getResidentSetSize()), p.getName());

        return process;
    }

    public static String printProcesses4(OperatingSystem os, GlobalMemory memory) {
        // Sort by highest CPU
        List<OSProcess> procs = Arrays.asList(os.getProcesses(5, OperatingSystem.ProcessSort.CPU));
        String process = "";

        OSProcess p = procs.get(4);
//
        process += String.format(" %5d   %5.1f   %4.1f   %9s   %9s   %s%n", p.getProcessID(),
                100d * (p.getKernelTime() + p.getUserTime()) / p.getUpTime(),
                100d * p.getResidentSetSize() / memory.getTotal(), FormatUtil.formatBytes(p.getVirtualSize()),
                FormatUtil.formatBytes(p.getResidentSetSize()), p.getName());

        return process;
    }

    public static void printMemory(GlobalMemory memory) {
        System.out.println("\n Memory: " + FormatUtil.formatBytes(memory.getAvailable()) + "/"
                + FormatUtil.formatBytes(memory.getTotal()));
        System.out.println("Swap used: " + FormatUtil.formatBytes(memory.getSwapUsed()) + "/"
                + FormatUtil.formatBytes(memory.getSwapTotal()));
    }

    public void setPorcentagemDeUso(int porcentagemDeUso) {
        this.porcentagemDeUso = porcentagemDeUso;
    }

    public int getPorcentagemDeUso() {
        double percentage = processor.getSystemCpuLoad() * 100;
        percentage = Math.round(percentage);
        this.porcentagemDeUso = (int) percentage;
        return porcentagemDeUso;
    }

    public int getPorcentagemDeUso2() {
        long totalMemoria = si.getHardware().getMemory().getTotal();
        long memoriaDisponivel = si.getHardware().getMemory().getAvailable();
        long memoriaUsada = totalMemoria - memoriaDisponivel;
        long temp = memoriaUsada * 100 / totalMemoria;
        return this.porcentagemDeUso = (int) temp;
    }

    public int getPorcentagemDeUso3() {
        long espacoUsado = root[0].getTotalSpace() - root[0].getFreeSpace();
        long porcentagem = espacoUsado * 100 / root[0].getTotalSpace();
        return this.porcentagemDeUso = (int) porcentagem;
    }

    public String printProcessor(CentralProcessor processor) {

        return "Processador: " + processor;
    }

    public String infoMemory(GlobalMemory memory) {
        return "Memória: " + FormatUtil.formatBytes(memory.getTotal());
    }

    public String printDisks(HWDiskStore[] diskStores) {
        return "Discos: " + FormatUtil.formatBytes(root[0].getTotalSpace());
    }
}

