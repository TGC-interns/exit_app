import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  date: string;
  day: string;
  month: string;
  time: string;
  duration: string;
  title: string;
  unit: string;
  type: string;
  teacher: string;
  description: string;
  status: 'completed' | 'incomplete' | 'attendance';
  attended?: number;
  total?: number;
};

export default function ScheduleCard({
  date,
  day,
  month,
  time,
  duration,
  title,
  unit,
  type,
  teacher,
  description,
  status,
  attended,
  total,
}: Props) {
  return (
    <View style={styles.card}>
      {/* Left Date Section */}
      <View style={styles.dateBox}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.month}>{month}</Text>
        <Text style={styles.day}>{day}</Text>
        <Text style={styles.time}>{time}</Text>
        <View style={styles.durationBox}>
          <Text style={styles.duration}>{duration}</Text>
        </View>
      </View>

      {/* Right Content */}
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.teacherBadge}>
            <Text style={styles.teacher}>{teacher}</Text>
          </View>
        </View>

        <Text style={styles.subtitle}>
          Unit: {unit} • {type}
        </Text>
        <Text style={styles.description}>{description}</Text>

        {/* Status Section */}
        {status === 'completed' && (
          <Text style={styles.completed}>✔ Completed</Text>
        )}

        {status === 'incomplete' && (
          <View>
            <Text style={styles.attendance}>
              {attended} of {total} Students Attended
            </Text>
            <View style={styles.progressBarBg}>
              <View
                style={[styles.progressBarFill, { width: `${(attended! / total!) * 100}%` }]}
              />
            </View>
            <TouchableOpacity style={styles.incompleteButton}>
              <Text style={styles.incompleteButtonText}>Mark as complete</Text>
            </TouchableOpacity>
            <Text style={styles.footer}>
              {attended} of {total} lectures completed
            </Text>
          </View>
        )}

        {status === 'attendance' && (
          <TouchableOpacity style={styles.attendanceButton}>
            <Text style={styles.attendanceButtonText}>Attendance Check-In</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 12,
    elevation: 3,
    overflow: 'hidden',
  },
  dateBox: {
    width: 80,
    backgroundColor: '#e6f0eb',
    alignItems: 'center',
    paddingVertical: 10,
  },
  date: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  month: { fontSize: 14, color: '#555' },
  day: { fontSize: 12, color: '#777' },
  time: { fontSize: 10, color: '#777', marginTop: 4 },
  durationBox: {
    marginTop: 6,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  duration: { fontSize: 10, fontWeight: 'bold', color: '#444' },

  content: { flex: 1, padding: 12 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between' },
  title: { fontSize: 16, fontWeight: 'bold', color: '#333', flex: 1 },
  teacherBadge: {
    backgroundColor: '#eef3f9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  teacher: { fontSize: 12, color: '#333' },

  subtitle: { fontSize: 13, color: '#666', marginTop: 4 },
  description: { fontSize: 12, color: '#555', marginTop: 4 },

  completed: { color: '#2e7d32', fontWeight: '600', marginTop: 8 },

  attendance: { fontSize: 12, color: '#444', marginTop: 8 },
  progressBarBg: {
    height: 6,
    backgroundColor: '#ddd',
    borderRadius: 4,
    marginTop: 4,
  },
  progressBarFill: {
    height: 6,
    backgroundColor: '#2e7d32',
    borderRadius: 4,
  },
  incompleteButton: {
    marginTop: 8,
    backgroundColor: '#e8f5e9',
    padding: 6,
    borderRadius: 8,
  },
  incompleteButtonText: { textAlign: 'center', color: '#2e7d32', fontWeight: '500' },
  footer: { fontSize: 12, color: '#444', marginTop: 4 },

  attendanceButton: {
    marginTop: 10,
    backgroundColor: '#f1f8e9',
    padding: 8,
    borderRadius: 8,
  },
  attendanceButtonText: { textAlign: 'center', color: '#33691e', fontWeight: '500' },
});
